import React from "react";
import useUserStatus from "./useUserStatus.jsx";

function UserListItem(props) {
  const isOnline = useUserStatus(props.user.id);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.user.name}</li>
  );
}

export default UserListItem;
