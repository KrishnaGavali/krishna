import React, { useEffect, useState } from "react";
import "../../font.css";
import { AnimatePresence, motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState(null);
  const [canSend, setCanSend] = useState(true);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (alertMessage == null) return;

    const timer = setTimeout(() => {
      setAlertMessage(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [alertMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCanSend(false); // Lock sending for 1 min

    const { name, email, message } = formData;

    const telegramMessage = `
📩 *New Contact Form Submission*:
👤 *Name*: ${name}
📧 *Email*: ${email}
📝 *Message*: ${message}
    `;

    try {
      const botToken = import.meta.env.VITE_BOT_TOKEN; // 👈 Replace this
      const chatId = import.meta.env.VITE_CHATID; // 👈 Replace this

      console.log(botToken, chatId);

      if (!canSend) {
        setAlertMessage(
          " Easy, friend! Your message will get here soon enough. Just chill for 1 minute"
        );
        return;
      }

      const res = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: "Markdown",
          }),
        }
      );

      if (res.ok) {
        setAlertMessage("📨 Message sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setAlertMessage("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      setAlertMessage("⚠️ Error occurred!");
    }

    // Re-enable sending after 15 seconds cooldown
    setTimeout(() => {
      setCanSend(true);
    }, 60000);
  };

  return (
    <div className="w-full fira-code min-h-screen flex justify-center items-center bg-[#0a192f] px-4">
      <div className="w-full max-w-xl">
        <motion.p
          className="text-[#64ffda] text-2xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Connect With Me
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.3 },
          }}
          viewport={{ once: true }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-[#0a192f] text-white border border-[#64ffda] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
            initial={{ boxShadow: "0px 0px 0px 0px #64ffda" }}
            whileFocus={{ boxShadow: "0px 0px 10px 0px #64ffda" }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-[#0a192f] text-white border border-[#64ffda] focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
            initial={{ boxShadow: "0px 0px 0px 0px #64ffda" }}
            whileFocus={{ boxShadow: "0px 0px 10px 0px #64ffda" }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="p-3 rounded-md bg-[#0a192f] text-white border border-[#64ffda] focus:outline-none focus:ring-2 focus:ring-[#64ffda] resize-none"
            initial={{ boxShadow: "0px 0px 0px 0px #64ffda" }}
            whileFocus={{ boxShadow: "0px 0px 10px 0px #64ffda" }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="bg-[#64ffda] text-[#0a192f] font-bold py-3 rounded-md hover:bg-transparent hover:text-[#64ffda] border-2 border-[#64ffda] transition-all duration-300 cursor-pointer"
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.5, duration: 0.1 }}
            disabled={!canSend}
          >
            Send It
          </motion.button>
        </motion.form>
      </div>
      <AnimatePresence mode="wait">
        {alertMessage != null && (
          <motion.div
            className="bg-[#64ffda] fixed bottom-2 right-2 p-2 rounded-full shadow-[5px_5px_0px_0px_white] text-[#0a192f]"
            id="alertBox"
            initial={{ scale: 0, x: 200 }}
            animate={{ x: 0, scale: 1, transition: { duration: 0.3 } }}
            exit={{ x: 200, scale: 0 }}
          >
            {alertMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
