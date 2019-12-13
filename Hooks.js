import React, { useState, useEffect } from "react";

import { ScreenEmitter } from "./EventEmitter";
import { State } from "./index";

export function useScreenUtils() {
  const [screenState, setScreenState] = useState(State);

  useEffect(() => {
    function handleStateChange(state) {
      setScreenState(state);
    }

    ScreenEmitter.addListener("change", handleStateChange);
    return () => {
      ScreenEmitter.removeListener("change", handleStateChange);
    };
  });

  return screenState;
}
