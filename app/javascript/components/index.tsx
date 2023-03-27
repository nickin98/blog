import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

document.addEventListener("turbo:load", () => {
  const root = ReactDOM.createRoot(
    document.getElementById("blog") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
