import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="mx-auto px-5 py-10 lg:container">{children}</div>;
};
