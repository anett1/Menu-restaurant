import React, { Component } from "react";
import "../styles/headerMenuItems.scss";
import Button from "./Button";
import { connect } from "react-redux";
import img from "../img/chickenburger.png";
import { Link } from "react-router-dom";

class HeaderMenuItems extends Component {
  render() {
    return (
      <div className="HeaderMenuItemsWrapper">
        <div className="logo">
          <Link exact="true" to="/">
            <img src={img} alt={img} />
          </Link>
        </div>
        {this.props.MenuView ? (
          <div className="HeaderMenuItemsButton">
            {this.props.orderStatus.length !== 0 ? (
              <Button path={"/summary"}>
                see your order{" "}
                <span className="quantity">
                  <strong>
                    {this.props.orderStatus
                      .map((item) => item.quantity)
                      .reduce((ecc, item) => ecc + item)}
                  </strong>
                </span>{" "}
              </Button>
            ) : null}
          </div>
        ) : (
          <div className="HeaderMenuItemsButton">
            {this.props.orderStatus.length !== 0 ? (
              <Button path={"/menu"}>
                back to menu{" "}
                <span className="quantity">
                  <strong>
                    {this.props.orderStatus
                      .map((item) => item.quantity)
                      .reduce((ecc, item) => ecc + item)}
                  </strong>
                </span>
              </Button>
            ) : (
              <Button path={"/"}>Start new order</Button>
            )}

            {this.props.orderStatus.length !== 0 ? (
              <h4>Your table number: {this.props.tableNumber}</h4>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableNumber: state.tableNumber,
    orderStatus: state.orderStatus,
  };
};

export default connect(mapStateToProps)(HeaderMenuItems);
