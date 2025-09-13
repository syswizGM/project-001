import React, { useState, useEffect } from "react";

function UserStatusWithCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ServerAPI.subscribeUserStatus(Props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeUserStatus(Props.user.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
}

export default UserStatusWithCounter;
