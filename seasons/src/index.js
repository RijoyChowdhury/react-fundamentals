import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // For the complete life cycle, visit:
  // https: //projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  // one time call: for intial setup
  //   constructor(props) {
  //     console.log("Constructor() method was called");
  //     // super is a refernece to parent's constructor function
  //     super(props);
  //     // initialise a state object
  //     this.state = { lat: null, errorMessage: "" };
  //   }

  // alternate way of initialising state
  // does not require constructor() method call
  state = { lat: null, errorMessage: "" };

  // one time call: good for data loading and fetch calls
  // best practise
  componentDidMount() {
    console.log("ComponenetDidMount() was called");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  // called multiple times and always immediatly after render() call
  componentDidUpdate() {
    console.log("ComponentDidUpdate() was called");
  }
  // one time call: place for code clean up
  componentWillUnmount() {
    console.log("ComponentWillUnmount() was called");
  }

  // =========================================================
  // other less used life cycle methods(rarely used)
  // =========================================================

  // called every time before render() method call
  // returns boolean always
  shouldComponentUpdate() {
    console.log("ShouldComponentUpdate() was called");
    return true;
  }
  // method is always static
  // A valid state object (or null) must be returned always.
  static getDerivedStateFromProps() {
    console.log("GetDerivedStateFromProps() was called");
    return null;
  }
  //other less used life cycle methods(rarely used)
  // called every time after render() method call
  // but before componentDidUpdate() method call
  // A snapshot value (or null) must be returned always.
  getSnapshotBeforeUpdate() {
    console.log("GetSnapshotBeforeUpdate() was called");
    return null;
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner msg="Waiting for user permission..." />;
  }

  // =========================================================
  // render() method call section
  // =========================================================
  // called multiple times whenever state changes
  // only handle jsx
  render() {
    console.log("Render() method was called");
    return this.renderContent();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
