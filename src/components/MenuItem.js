import React from "react";
import "../styles/menuItem.scss";
import Counter from "./Counter";

const MenuItem = (props) => {
  const { name, image_url, description, price } = props.menuItem;

  return (
    <div className="menuItem">
      <div className="boxPhoto">
        <img src={image_url} alt={name} />
      </div>
      <div className="boxDescription">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          <strong>${price.toFixed(2)}</strong>
        </p>
      </div>
      <div className="boxAdd">
        <Counter
          menuItem={props.menuItem}
          orderItem={props.orderItem}
          addToOrder={props.addToOrder}
          removeFromOrder={props.removeFromOrder}
        />
      </div>
    </div>
  );
};

export default MenuItem;
