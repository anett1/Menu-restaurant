import React from "react";
import MenuView from "./MenuView";
import SummaryView from "./SummaryView";
import InvitationView from "./InvitationView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/root.scss";
import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "../config/store";

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="wrapper">
            <Switch>
              <Route path="/" exact component={InvitationView} />
              <Route path="/menu" component={MenuView} />
              <Route path="/summary" component={SummaryView} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
