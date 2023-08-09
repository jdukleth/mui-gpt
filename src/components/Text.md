# Text Component

The `Text` component is a reusable component built on top of the MUI's `<Box>` component. It utilizes the CSS `clamp` function to provide responsive font sizing based on the viewport.

## Props

- `minFontSize`: The minimum font size in pixels (default is from utilities).
- `maxFontSize`: The maximum font size in pixels (default is from utilities).
- `minViewport`: The minimum viewport width in pixels (default is from utilities).
- `maxViewport`: The maximum viewport width in pixels (default is from utilities).

## Usage

```javascript
import { Text } from './components/TextComponent';

<Text minFontSize={14} maxFontSize={28}>Hello, World!</Text>
