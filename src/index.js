import { StrictMode } from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
  rootElement
);
