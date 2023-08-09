# Text Component

The `Text` component is a reusable component built on top of the MUI's `<Box>` component. It utilizes the CSS `clamp` function to provide responsive font sizing based on the viewport.

## Props

- `clamp`: An object with optional properties (see below) to be used in our `clampulator`
- `inline`: Make the component CSS display `inline-block` instead of `block`
- `...props`: Any other props the `<Box>` component can accept

## Example Clamp Prop Object

> all object keys are optional (defaults below)

```const clampObject = {
  minPixels?: 11,
  maxPixels?: 21,
  minViewport?: 360,
  maxViewport?: 1920
}
```

## Usage

```javascript
import { Text } from './components/TextComponent';

<Text clamp={clampObject} inline>Hello, World!</Text>
 