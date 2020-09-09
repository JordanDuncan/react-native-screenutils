# `react-native-screenutils`

[![npm version](https://badge.fury.io/js/react-native-screenutils.svg)](https://badge.fury.io/js/react-native-screenutils)
[![License](https://img.shields.io/github/license/JordanDuncan/react-native-screenutils)](https://github.com/JordanDuncan/react-native-screenutils)

Helpers to adapt your React Native app to screen and orientation changes.

## Installation

```
npm i react-native-screenutils
# or
yarn add react-native-screenutils
```

## Usage

This module exposes a screen state object via various means. The object is structured as follows:

```js
{
  width, // Screen Width in pt (number)
    height, // Screen Height in pt (number)
    orientation, // Orientation (see Values.OrientationValues) (string)
    layoutType, // Layout Type (see Values.LayoutValues) (string)
    fontScale; // Font Scale, default is 1 (number)
}
```

`orientation` and `layout` are enums.

```jsx
import { Values } from "react-native-screenutils";

// Values.OrientationValues.PORTRAIT
// Values.OrientationValues.LANDSCAPE

// Values.LayoutValues.PHONE
// Values.LayoutValues.TABLET
```

This module allows you to access updates to the screen size, orientation and font scale in three different ways:

### Event Emitter

```jsx
import { ScreenEmitter, Values } from "react-native-screenutils";

ScreenEmitter.addListener("change", state => {
  // state.width
  // state.height
  // state.orientation = one of Values.OrientationValues
  // state.layout = one of Values.LayoutValues
  // state.fontScale
});

// Don't forget to remove the event listener when you no longer require it!
```

### React Context

Wrap your app in `ScreenProvider` and access screen state via `ScreenConsumer`.

```jsx
import { ScreenProvider, ScreenConsumer } from "react-native-screenutils";

const App = () => {
  return (
    <View>
      <ScreenProvider>
        <ScreenConsumer>
          {({ width, height, orientation, layoutType, fontScale }) => (
            <Text>{"Screen width: " + width}</Text>
          )}
        </ScreenConsumer>
      </ScreenProvider>
    </View>
  );
};
```

### React Hooks

`react-native-screenutils` provides the `useScreenUtils` hook.

```jsx
import { useScreenUtils } from "react-native-screenutils";

const ScreenDetails = () => {
  const screenState = useScreenUtils();

  return <Text>{"Screen width: " + screenState.width}</Text>;
};
```

## License

MIT
