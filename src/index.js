/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import FeedbackProvider from "./context/FeedbackContext";
import FilterContextProvider from "./context/FilterContext";

ReactDOM.render(
  <React.StrictMode>
    <FeedbackProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </FeedbackProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
