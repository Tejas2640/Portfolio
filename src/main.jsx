import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Lenis from "@studio-freight/lenis";

import "./index.css";
import App from "./App.jsx";

const lenis = new Lenis({
  duration: 0.01,
  smoothWheel: true,
  wheelMultiplier: 0.5,
  smoothTouch: 0.2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);