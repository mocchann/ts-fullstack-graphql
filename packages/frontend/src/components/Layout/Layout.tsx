import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <div className="h-screen bg-gray-100 dark:bg-red-100">{children}</div>
    </>
  );
};
