import { Card } from "./components/Card";
import { Logo } from "./components/Logo";
import { ReadTheDocs } from "./components/ReadTheDocs";

type Props = {
  data: string;
};

export default function App(props: Props) {
  return (
    <>
      <Logo />
      <h1>{props.data}</h1>
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
