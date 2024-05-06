import React from "react";
import '../tailwind.css';
import ReactDOM from "react-dom/client";
import HomePage from "./pages/homePage/HomePage.tsx";
import { BaseProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Apply } from "./pages/applicationPage/Apply.tsx";

const RootProviders = (props: { children: React.ReactNode }) => {
  return (
    <StyletronProvider value={new Styletron()}>
      <BaseProvider theme={LightTheme}>
        {props.children}
      </BaseProvider>
    </StyletronProvider>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootProviders><HomePage /></RootProviders>,
    },
    {
      path: "/apply",
      element: <RootProviders><Apply /></RootProviders>,
    },
  ]
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
