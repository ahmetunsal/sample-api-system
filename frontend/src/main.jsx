import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { DocumentProvider } from "./context/DocumentProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DocumentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DocumentProvider>
  </StrictMode>
);
