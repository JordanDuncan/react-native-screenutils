/**
 * States
 * ---
 * Current State of varous values
 */

import { Dimensions, PixelRatio } from "react-native";

import { OrientationValues, LayoutValues } from "./Values";

class State {
  constructor() {
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    this.orientation =
      this.height > this.width
        ? OrientationValues.PORTRAIT
        : OrientationValues.LANDSCAPE;

    this.layoutType =
      this.width > 600 ? LayoutValues.TABLET : LayoutValues.PHONE;

    this.fontScale = PixelRatio.getFontScale();
  }
}

export default new State();
