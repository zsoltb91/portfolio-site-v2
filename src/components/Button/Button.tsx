import "./Button.css";

function Button(props: {
  id?: string;
  title: string;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <button
      className="btn"
      onClick={props.onClick}
      id={props.id}
      title={props.title}
    >
      {props.title}
    </button>
  );
}

export default Button;
