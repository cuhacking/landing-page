import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BaseProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyletronProvider value={new Styletron()}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>
);
