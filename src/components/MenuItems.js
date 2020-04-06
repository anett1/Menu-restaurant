import React from "react";
import { connect } from "react-redux";
import MenuItem from "./MenuItem";

import "../styles/menuItems.scss";

const API = "https://sheltered-spire-21470.herokuapp.com/api/menu";

class MenuItems extends React.Component {
  state = {
    categoryItems: [],
    menuItems: [],
  };

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const menuItems = data;

        const categoryItemsAll = menuItems.map((item) => item.category);
        const categoryItems = categoryItemsAll.filter(
          (item, index) => categoryItemsAll.indexOf(item) === index
        );
        this.setState((prevState) => ({
          categoryItems: prevState.categoryItems.concat(categoryItems),
          menuItems: prevState.menuItems.concat(menuItems),
        }));
      });
  }
  componentDidUpdate() {
    this.props.addPrices(this.props.orderStatus);
  }

  render() {
    return (
      <>
        {this.state.categoryItems.map((categoryItem, index) => (
          <div key={categoryItem} className="categoryItems">
            <h1>{categoryItem}</h1>
            {this.state.menuItems
              .filter(
                (menuItem) =>
                  menuItem.category === this.state.categoryItems[index]
              )
              .map((menuItem) => (
                <MenuItem
                  key={menuItem.id}
                  menuItem={menuItem}
                  addToOrder={this.props.addToOrder}
                  removeFromOrder={this.props.removeFromOrder}
                  orderItem={
                    this.props.orderStatus.filter(
                      (orderItem) => orderItem.id === menuItem.id
                    )[0]
                  }
                />
              ))}
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderStatus: state.orderStatus,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);
