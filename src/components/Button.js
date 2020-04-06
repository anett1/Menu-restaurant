import React from "react";
import "../styles/button.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Button = ({
  path,
  children,
  checkNumberButton,
  tableNumber,
  handleTrueTableNumber,
  sendOrderButton,
  sendOrder,
}) => {
  return checkNumberButton && tableNumber === "" ? (
    <a
      className="button"
      onClick={() => {
        handleTrueTableNumber();
      }}
    >
      {children}
    </a>
  ) : sendOrderButton ? (
    <a
      className="button"
      onClick={() => {
        sendOrder();
      }}
    >
      {children}
    </a>
  ) : (
    <Link className="button" to={path}>
      {children}
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    tableNumber: state.tableNumber,
  };
};

export default connect(mapStateToProps)(Button);
