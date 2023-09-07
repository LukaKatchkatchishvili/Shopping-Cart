import React, { Suspense } from "react";
import { createRoot } from "react-dom"; // Use createRoot from "react-dom"
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { AddedItemsProvider } from "./useContext/addedItemsContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading..</div>}>
      <BrowserRouter>
        <AddedItemsProvider>
          {" "}
          {/* Wrap your App with AddedItemsProvider */}
          <App />
        </AddedItemsProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
