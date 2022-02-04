import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Company from "./components/Company";
import Terms from "./components/Company/Terms";

class Routes extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {}

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Company} />
          <Route path="/terms" exact component={Terms} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
