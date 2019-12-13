import { Dimensions, PixelRatio } from "react-native";

import { ScreenEmitter } from "./EventEmitter";
import { ScreenProvider, ScreenConsumer } from "./Context";
import { useScreenUtils } from "./Hooks";

import StateClass from "./State";
import { LayoutValues, OrientationValues } from "./Values";

/**
 * Listener
 * ---
 * Listen to screen dimension changes to fire off events on our emitter
 */

Dimensions.addEventListener("change", ({ window }) => {
  StateClass.width = window.width;
  StateClass.height = window.height;
  StateClass.orientation =
    StateClass.height > StateClass.width
      ? OrientationValues.PORTRAIT
      : OrientationValues.LANDSCAPE;
  StateClass.layoutType =
    StateClass.width > 600 ? LayoutValues.TABLET : LayoutValues.PHONE;
  StateClass.fontScale = PixelRatio.getFontScale();

  ScreenEmitter.emit("change", {
    width: StateClass.width,
    height: StateClass.height,
    orientation: StateClass.orientation,
    layoutType: StateClass.layoutType,
    fontScale: StateClass.fontScale
  });
});

/**
 * Exports
 */

const State = {
  width: StateClass.width,
  height: StateClass.height,
  orientation: StateClass.orientation,
  layoutType: StateClass.layoutType,
  fontScale: StateClass.fontScale
};

const Values = {
  OrientationValues,
  LayoutValues
};

export {
  // Emitter
  ScreenEmitter,
  // Context
  ScreenProvider,
  ScreenConsumer,
  // States
  State,
  // Values
  Values,
  // Hook
  useScreenUtils
};
