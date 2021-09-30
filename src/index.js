/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import FeedbackProvider from "./context/FeedbackContext";
import FilterContextProvider from "./context/FilterContext";
import UpvoteContextProvider from "./context/UpvoteContext";

ReactDOM.render(
  <React.StrictMode>
    <FeedbackProvider>
      <FilterContextProvider>
        <UpvoteContextProvider>
          <App />
        </UpvoteContextProvider>
      </FilterContextProvider>
    </FeedbackProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
