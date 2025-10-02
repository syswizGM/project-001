import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 실제로 사용할 컴포넌트만 import
import Accommodate from "./chapter_07/Accommodate.jsx";
import ConfirmButton from "./chapter_08/ConfirmButton.jsx";
import AttendanceBook from "./chapter_08/AttendanceBook.jsx";
import RequestForm from "./chapter_08/RequestForm.jsx";
import FruitSelect from "./chapter_08/FruitSelect.jsx";
import Reservation from "./chapter_08/Reservation.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Reservation />
  </React.StrictMode>
);

reportWebVitals();
