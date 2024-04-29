import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const ref = useRef("");

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + ref.current.attributes.value.value);
    }, 3000);
  }

  return (
    <>
      <input ref={ref} value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
