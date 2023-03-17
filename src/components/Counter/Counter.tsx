import "./Counter.css";

function Counter(props: { secs: string | number; mins: string | number }) {
  return (
    <div className="counter-cont">
      {props.mins} : {props.secs}
    </div>
  );
}

export default Counter;
