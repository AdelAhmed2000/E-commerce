import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AddToCartProvider from "./context/AddToCartContext.jsx";
import { Provider } from "react-redux";
import { store } from "./rtk/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AddToCartProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AddToCartProvider>
);
