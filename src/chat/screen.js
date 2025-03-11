import React from "react";
import Message from "./message";

export default function Screen({ messageList }) {
  return (
    <div className="container mt-4">
      {messageList.length > 0 ? (
        messageList.map((msg, index) => <Message key={index} message={msg} />)
      ) : (
        <p className="text-center text-muted">אין הודעות כרגע</p>
      )}
    </div>
  );
}