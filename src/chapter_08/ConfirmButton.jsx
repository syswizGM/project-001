import React, { useState } from "react";

function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleClick = () => setIsConfirmed(true);

  return (
    <button onClick={handleClick} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인"}
    </button>
  );
}

export default ConfirmButton;
