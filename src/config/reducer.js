const orderStatusWithoutItem = (orderStatus, item) =>
  orderStatus.filter((orderStatusItem) => orderStatusItem.id !== item.id);

const itemInOrderStatus = (orderStatus, item) =>
  orderStatus.filter((orderStatusItem) => orderStatusItem.id === item.id)[0];

const addToOrderStatus = (orderStatus, item) => {
  const orderItem = itemInOrderStatus(orderStatus, item);
  return orderItem === undefined
    ? [
        ...orderStatusWithoutItem(orderStatus, item),
        { ...item, quantity: 1, priceMultiQuantity: item.price },
      ]
    : [
        ...orderStatusWithoutItem(orderStatus, item),
        {
          ...orderItem,
          quantity: orderItem.quantity + 1,
          priceMultiQuantity: parseFloat(
            (orderItem.price * (orderItem.quantity + 1)).toFixed(2)
          ),
        },
      ];
};

const removeFromOrder = (orderStatus, item) => {
  return item.quantity === 1
    ? [...orderStatusWithoutItem(orderStatus, item)]
    : [
        ...orderStatusWithoutItem(orderStatus, item),
        {
          ...item,
          quantity: item.quantity - 1,
          priceMultiQuantity: parseFloat(
            (item.price * (item.quantity - 1)).toFixed(2)
          ),
        },
      ];
};

const orderStatusReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return addToOrderStatus(state, action.payload);

    case "REMOVE":
      return removeFromOrder(state, action.payload);
    case "DELETE":
      return (state = []);

    default:
      return state;
  }
};
export { orderStatusReducer };
//
//
//

const tableNumberReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_TABLE_NUMBER":
      return (state = action.payload);
    case "DELETE":
      return (state = "");
    default:
      return state;
  }
};
export { tableNumberReducer };

const totalPricesReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_PRICES":
      return action.payload.length
        ? (state = action.payload
            .map((item) => item.priceMultiQuantity)
            .reduce((ecc, item) => ecc + item)).toFixed(2)
        : null;

    default:
      return state;
  }
};
export { totalPricesReducer };
