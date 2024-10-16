import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Aurelia } from "./app/Aurelia";
import "./styles/main.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Aurelia />
    </StrictMode>
  );
} else {
  throw new Error("could not find an element with id `root` in index.html file");
}
