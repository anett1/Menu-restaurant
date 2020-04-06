import React from "react";
import "../styles/invitationView.scss";
import img from "../img/chickenburger.png";
import Button from "../components/Button";
import Input from "../components/Input";
import { connect } from "react-redux";

class InvitationView extends React.Component {
  state = {
    statusTableNumber: false,
  };

  handleTrueTableNumber = () => {
    if (!this.props.tableNumber) {
      this.setState({
        statusTableNumber: true,
      });
    }
  };
  handleFalseTableNumber = () => {
    if (this.props.tableNumber) {
      this.setState({
        statusTableNumber: false,
      });
    }
  };

  render() {
    return (
      <div className="InvitationViewWrapper">
        <div className="logo">
          <img src={img} alt={img} />
        </div>
        <div className="enterYourTableNumber">
          {this.state.statusTableNumber ? <p>enter your table number</p> : null}
        </div>
        <Input handleFalseTableNumber={this.handleFalseTableNumber} />
        <Button
          checkNumberButton
          handleTrueTableNumber={this.handleTrueTableNumber}
          path={"/menu"}
        >
          see our menu
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableNumber: state.tableNumber,
  };
};

export default connect(mapStateToProps)(InvitationView);
