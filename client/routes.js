import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Company from "./components/Company";
import Terms from "./components/Company/Terms";

class Routes extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {}
  async componentDidUpdate(prevProps) {}

  render() {
    const {} = this.props;

    return (
      <div>
        <Switch>
          <Route path="/" exact component={Company} />
          <Route path="/sites" exact component={Company} />
          <Route path="/terms" exact component={Terms} />
          {/* <Route path="/about" component={About} />
          <Route path="/home" exact component={Home} />
          <Route path="/sandboxLogin" component={SandboxLogin} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/blocked" component={BlockError} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
