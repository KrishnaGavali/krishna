import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[#0a192f]">
      <Home />
    </div>
  </StrictMode>
);
