import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Library from "./chapter_03/Library.jsx";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList.jsx";
import Counter from "./chapter_06/Counter.jsx";
import UseStatus from "./chapter_06/UseStatus.jsx";
import UserStatusWithCounter from "./chapter_06/UserStatusWithCounter.jsx";
import UserListItem from "./chapter_06/UserListItem";
import Accommodate from "./chapter_07/Accommodate";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
