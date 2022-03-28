react-github-corners
===
<!--dividing-->

[![](https://img.shields.io/github/issues/uiwjs/react-github-corners.svg)](https://github.com/uiwjs/react-github-corners/issues)
[![](https://img.shields.io/github/forks/uiwjs/react-github-corners.svg)](https://github.com/uiwjs/react-github-corners/network)
[![](https://img.shields.io/github/stars/uiwjs/react-github-corners.svg)](https://github.com/uiwjs/react-github-corners/stargazers)
[![](https://img.shields.io/github/v/release/uiwjs/react-github-corners.svg)](https://github.com/uiwjs/react-github-corners/releases)
[![](https://img.shields.io/npm/v/@uiw/react-github-corners.svg)](https://www.npmjs.com/package/@uiw/react-github-corners)
[![](https://jaywcjlove.github.io/sb/ico/gitee.svg)](https://gitee.com/uiw/react-github-corners)


Add a Github corner to your project page, This [GitHub corners](https://uiwjs.github.io/react-github-corners) for [**@react**](https://github.com/facebook/react) component. Visit [https://uiwjs.github.io/react-github-corners](https://uiwjs.github.io/react-github-corners) to preview the example effects.

Preview Example: [Github](https://uiwjs.github.io/react-github-corners) | [Gitee](https://uiw.gitee.io/react-github-corners/)

```bash
npm install --save @uiw/react-github-corners
# Via Yarn:
yarn add @uiw/react-github-corners
```

## Usage

```jsx
import GitHubCorners from '@uiw/react-github-corners';

function Demo() {
  return (
    <GitHubCorners
      position="left"
      href="https://github.com/uiwjs/react-github-corners"
    />
  )
}
```

## Props

```typescript
interface GitHubCornersProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The link to your project page.
   */
  href?: string;
  /**
   * The width and height of the corner. 
   * Default: `80`
   */
  size?: number;
  /**
   * The background color of the corner.
   * Default: `#151513`
   */
  bgColor?: string;
  /**
   * The Github logo color of the corner.
   * Default: `#fff`
   */
  color?: string;
  /**
   * The position of corner. 
   * Default: `right`
   */
  position?: 'left' | 'right';
  /**
   * It is positioned relative to the initial containing block established.
   * Default: `false`
   */
  fixed?: boolean;
  /**
   * Sets the z-order of a positioned element and its descendants or flex items.
   */
  zIndex?: number;
}
```

| Property Name | Type | Default Value | Description |
| ---- | ---- | ---- | ---- |
| href | String | - | The link to your project page. |
| size | String | `80` | The width and height of the corner. |
| bgColor | String | `#151513` | The background color of the corner. |
| color | String | `#fff` | The Github logo color of the corner. |
| position | String | `left`/`right` | The position of corner. |
| fixed | Boolean | `false` | It is positioned relative to the initial containing block established. |
| zIndex | Number | - | Sets the z-order of a positioned element and its descendants or flex items. |

## Development

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
npm run build
# Step 2, listen for compilation output type .d.ts file
npm run watch
npm run css:watch
# Step 3, development mode, listen to compile preview website instance
npm run start
```

Builds the app for production to the build folder.

```bash
npm run build
npm run doc
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-github-corners/graphs/contributors">
  <img src="https://uiwjs.github.io/react-github-corners/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
