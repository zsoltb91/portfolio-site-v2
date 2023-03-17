import "./GameCard.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";

function GameCard(props: {
  id: string;
  src: string;
  className: string;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <div className={props.className} onClick={props.onClick}>
      <img id={props.id} className="img" src={props.src} alt=""></img>
    </div>
  );
}

export default GameCard;
