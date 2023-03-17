import { ReactNode } from "react";
import "./MainContainer.css";

function MainContainer({ children }: { children: ReactNode }) {
  return <div className="maincontainer">{children}</div>;
}

export default MainContainer;
