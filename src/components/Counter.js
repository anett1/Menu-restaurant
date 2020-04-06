import React from "react";
import "../styles/counter.scss";

const Counter = (props) => {
  return props.summary ? (
    <div className="counter">
      <button
        //disabled={props.orderItem ? false : true}
        onClick={() => props.removeFromOrder(props.item)}
      >
        <h1>-</h1>
      </button>
      <span>{props.item.quantity || 0}</span>
      <button onClick={() => props.addToOrder(props.item)}>
        <h1>+</h1>
      </button>
    </div>
  ) : (
    <div className="counter">
      <button
        disabled={props.orderItem ? false : true}
        onClick={() => props.removeFromOrder(props.orderItem)}
      >
        <h1>-</h1>
      </button>
      <span>{(props.orderItem && props.orderItem.quantity) || 0}</span>
      <button onClick={() => props.addToOrder(props.menuItem)}>
        <h1>+</h1>
      </button>
    </div>
  );
};

export default Counter;
