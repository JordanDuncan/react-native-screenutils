/**
 * app/lib/ScreenUtils
 * ---
 * Utils for getting screen sizes, orientation, etc
 */

import React, { Component } from "react";

import { ScreenEmitter } from "./EventEmitter";
import * as State from "./State";

const { Provider, Consumer } = React.createContext({
  width: State.width,
  height: State.height,
  orientation: State.orientation,
  layoutType: State.layoutType,
  fontScale: State.fontScale
});

/**
 * ScreenProvider
 * ---
 * Uses the EventEmitter implementation to create a React Context that is aware of dimension changes
 */
class ScreenProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: State.default.width,
      height: State.default.height,
      orientation: State.default.orientation,
      layoutType: State.default.layoutType,
      fontScale: State.default.fontScale
    };
  }

  componentDidMount() {
    ScreenEmitter.addListener("change", this.dimensionHandler);
  }

  componentWillUnmount() {
    ScreenEmitter.removeListener("change", this.dimensionHandler);
  }

  dimensionHandler = dimensions => {
    this.setState(dimensions);
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { ScreenProvider, Consumer as ScreenConsumer };
