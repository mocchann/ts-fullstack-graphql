import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const ref = useRef('');

  function handleChange(e) {
    setText(e.target.value);
    ref.current = e.target.value;
  }

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + ref.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={handleChange}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
