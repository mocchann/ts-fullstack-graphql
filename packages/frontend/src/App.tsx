import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Logo } from "./components/Logo";
import { ReadTheDocs } from "./components/ReadTheDocs";

type Props = {
  data: string;
};

export default function App(data: Props) {
  console.log(data);
  return (
    <>
      <Logo />
      <h1>{data}</h1>
      <Card />
      <ReadTheDocs />
    </>
  );
}

export async function getServerSideProps() {
  const data = "Vite + React";

  return {
    props: {
      data,
    },
  };
}
