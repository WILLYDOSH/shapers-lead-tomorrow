import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("[Boot] main.tsx starting");

window.addEventListener("error", (e) => {
  console.error("[GlobalError]", (e as ErrorEvent).error || (e as ErrorEvent).message, e);
});
window.addEventListener("unhandledrejection", (e) => {
  console.error("[UnhandledRejection]", (e as PromiseRejectionEvent).reason, e);
});

const rootEl = document.getElementById("root");
console.log("[Boot] root element found:", !!rootEl, rootEl);

if (!rootEl) {
  throw new Error("Root element #root not found in index.html");
}

createRoot(rootEl).render(<App />);

