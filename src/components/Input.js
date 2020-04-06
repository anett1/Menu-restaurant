import React from "react";
import { connect } from "react-redux";
import "../styles/input.scss";

const Input = (props) => {
  return (
    <>
      <input
        type="number"
        placeholder="what is your table number"
        value={props.tableNumber}
        onChange={(e) => {
          props.handleTableNumber(e);
          props.handleFalseTableNumber();
        }}
        //onChange={props.handleTableNumber}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tableNumber: state.tableNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleTableNumber: (e) => {
      dispatch({ type: "CHANGE_TABLE_NUMBER", payload: e.target.value });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Input);

/*class Input extends Component {
  state = {
    tableNumber: ""
  };

  handleTableNumber = e => {
    this.setState({
      tableNumber: e.target.value
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="what is your table number"
          value={this.state.tableNumber}
          onChange={this.handleTableNumber}
        />
      </>
    );
  }
}
export default Input;*/
