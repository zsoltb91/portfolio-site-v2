import "./Projects.css";
import Memgame from "../../assets/memgame.png";
import Weatherapp from "../../assets/weatherapp.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projcont">
      <Link className="proj proj1" to="/memgame">
        <span className="imgtext">Memory game</span>
      </Link>
      <Link className="proj proj2" to="/weatherapp">
        <span className="imgtext">Weather app</span>
      </Link>
    </div>
  );
}

export default Projects;

//<img className="proj" src={Memgame} alt="Memory Game"/>
//<img className="proj" src={Weatherapp} alt="Memory Game"/>
