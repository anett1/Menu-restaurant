import React from "react";
import { connect } from "react-redux";
import Counter from "./Counter";
import Button from "./Button";
import "../styles/summary.scss";

function sort(items) {
  return items.sort((a, b) => a.id - b.id);
}

class Summary extends React.Component {
  state = {
    orderNumber: "",
  };
  componentDidUpdate() {
    this.props.addPrices(this.props.orderStatus);
  }

  sendOrder = () => {
    const API = "https://sheltered-spire-21470.herokuapp.com/api/order";
    let data = {
      tableNumber: this.props.tableNumber,
      orderStatus: this.props.orderStatus,
      totalPrices: this.props.totalPrices,
    };
    //console.log(data);
    this.props.clearOrder();
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        const orderNumber = resp.pickup_number;
        this.setState({
          orderNumber: orderNumber,
        });

        //console.log(orderNumber);
        //console.warn("resp", resp);
      });
    });
  };

  render() {
    return (
      <div className="wrapperSummary">
        {this.props.orderStatus.length === 0 ? (
          <div className="orderedItem">
            <p
              style={{
                paddingLeft: 20,
              }}
            >
              Your order number:{" "}
              <span className="orderNumber">{this.state.orderNumber}</span> has
              been sent correctly.
            </p>
          </div>
        ) : (
          sort(this.props.orderStatus).map((item) => (
            <div key={item.id} className="orderedItem">
              <div className="orderedName">
                <h3>{item.name}</h3>
                <p> Price: ${item.price}</p>
              </div>
              <div className="orderedCanter">
                <Counter
                  summary
                  item={item}
                  addToOrder={this.props.addToOrder}
                  removeFromOrder={this.props.removeFromOrder}
                />
              </div>
              <div className="orderedPriceTotal">
                <p>
                  Price for {item.quantity}{" "}
                  {item.quantity === 1 ? "item" : "items"}:{" "}
                  <strong> ${item.priceMultiQuantity}</strong>
                </p>
              </div>
            </div>
          ))
        )}
        {this.props.orderStatus.length ? (
          <div className="SummaryOrder">
            <div className="buttonPOST">
              <Button sendOrderButton sendOrder={this.sendOrder}>
                send your order
              </Button>
            </div>
            <div className="totalPrices">
              <p>
                Total cost of the order:{" "}
                <strong>${this.props.totalPrices}</strong>{" "}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderStatus: state.orderStatus,
    tableNumber: state.tableNumber,
    totalPrices: state.totalPrices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToOrder: (item) => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromOrder: (item) => {
      dispatch({ type: "REMOVE", payload: item });
    },
    addPrices: (item) => {
      dispatch({ type: "ADD_PRICES", payload: item });
    },
    clearOrder: () => {
      dispatch({ type: "DELETE" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
