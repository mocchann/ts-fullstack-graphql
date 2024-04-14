import "./App.css";
import { Card } from "./components/Card";
import { Logo } from "./components/Logo";
import { ReadTheDocs } from "./components/ReadTheDocs";

function App() {
  return (
    <>
      <Logo />
      <h1>Vite + React</h1>
      <Card />
      <ReadTheDocs />
    </>
  );
}

export default App;
