import React, { useState, useEffect } from "react";
import useUserStatus from "./useUserStatus.jsx";

function UseStatus(props) {
  const isOnline = useUserStatus(props.user.id);

  if (isOnline === null) {
    return "대기중...";
  }
  return isOnline ? "온라인" : "오프라인";
}

export default UseStatus;
