import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState('');

  if (showHint) {
    return (
      <div>
        <p><i>Hint: Your favorite city?</i></p>
        <Form　text={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => {
          setShowHint(false);
        }}>Hide hint</button>
      </div>
    );
  }
  return (
    <div>
      <Form　text={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => {
        setShowHint(true);
      }}>Show hint</button>
    </div>
  );
}

function Form({ text, onChange }) {
  return (
    <textarea
      value={text}
      onChange={onChange}
    />
  );
}
