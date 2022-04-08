import "./Counter.scss";
const Counter = ({ age, increment, decrement, guest }) => {
  return (
    <div className="counter-container">
      <div className="guest-age">
        <p>{guest}</p>
        <p>{age}</p>
      </div>
      <div className="button-counter-wrapper">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
