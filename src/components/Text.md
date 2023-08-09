# Text Component

The `Text` component is a reusable component built on top of the MUI's `<Box>` component. It utilizes the CSS `clamp` function to provide responsive font sizing based on the viewport.

## Props

- `clamp` [optional] An object with optional properties (see below) to be used in our `clampulator`
- `inline`: [optional] Make the component CSS display `inline-block` instead of `block`
- `...props`: [optional] Any other props the `<Box>` component accepts (including `sx`)

## Usage

> all object keys are optional (defaults below)

```javascript
import { Text } from 'mui-gpt'

const clampObject = {
  minPixels: 11,
  maxPixels: 21,
  minViewport: 360,
  maxViewport: 1920
}

const myComponent = () => (
  <Text clamp={clampObject} inline sx={{ color: 'red' }}>
    Hello World!
  </Text>
)
```
