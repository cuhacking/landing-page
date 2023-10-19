import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BaseProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Apply } from "./components/Application/Apply.tsx";

const Root = () => {
  return (
    <StyletronProvider value={new Styletron()}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  )
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/apply",
      element: <Apply />,
    },
  ]
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
