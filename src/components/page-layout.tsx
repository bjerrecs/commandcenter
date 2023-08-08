import React, { ReactNode } from "react";
import NavBar from "./NavBar";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export const PageLayout = ({ children, ...props }: Props) => {
  return (
    <div className="page-layout">
      <NavBar />
      <div className="page-layout__content">{children}</div>
    </div>
  );
};