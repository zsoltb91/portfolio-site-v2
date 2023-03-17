import "./Intro.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="introcont">
      <h1 className="welcome">Welcome</h1>

      <h4>
        My name is Zsolt Berki, and this is my portfolio website. If you are
        interested in my React apps, please scroll down or choose from the menu.
      </h4>

      <Link to="/projects">
        <Button title="Show apps" />
      </Link>
    </div>
  );
}

export default Intro;
