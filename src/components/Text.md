# `<Text>` Component

A per-pixel responsive text component built on top of MUI's `<Typography>` component. It utilizes the CSS `clamp` function to provide responsive font sizing based on the viewport.

## Props

- `clamp` [optional] An object with optional properties (see below) to be used in our `clampulator`
- `inline`: [optional] Make the component CSS display `inline-block` instead of `block`
- `...props`: [optional] All props the `<Typography>` component accepts (including `sx`)

## Usage

```javascript
import { Text } from 'mui-gpt'

// all object keys are optional (defaults below)
const clampObject = {
  min: 11, // font-size (px)
  max: 21,
  minVw: 360, // viewport width (px)
  maxVw: 1920
}

const MyComponent = () => (
  <Text clamp={clampObject} inline sx={{ color: 'red' }}>
    Hello World!
  </Text>
)
```
