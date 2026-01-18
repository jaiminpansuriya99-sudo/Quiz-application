import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind + custom styles
import App from "./App";

// Optional: measure performance
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: report web vitals for performance monitoring
reportWebVitals();
