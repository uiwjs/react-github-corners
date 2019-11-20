react-github-corners
===

[![](https://img.shields.io/github/issues/uiwjs/react-github-corners.svg)](https://github.com/uiwjs/react-github-corners/issues)
[![](https://img.shields.io/github/forks/uiwjs/react-github-corners.svg)](https://github.com/uiwjs/react-github-corners/network)
[![](https://img.shields.io/github/stars/uiwjs/react-github-corners.svg)](https://github.com/uiwjs/react-github-corners/stargazers)
[![](https://img.shields.io/github/release/uiwjs/react-github-corners)](https://github.com/uiwjs/react-github-corners/releases)
[![](https://img.shields.io/npm/v/@uiw/react-github-corners.svg)](https://www.npmjs.com/package/@uiw/react-github-corners)
[![](https://jaywcjlove.github.io/sb/ico/gitee.svg)](https://gitee.com/uiw/react-github-corners)

<!--dividing-->

Add a Github corner to your project page, This [GitHub corners](https://uiwjs.github.io/react-github-corners) for [**@react**](https://github.com/facebook/react) component. Visit [https://uiwjs.github.io/react-github-corners](https://uiwjs.github.io/react-github-corners) to preview the example effects.

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

## Documentation

| Property Name | Type | Default Value | Description |
| ---- | ---- | ---- | ---- |
| href | String | - | The link to your project page. |
| size | String | `80` | The width and height of the corner. |
| bgColor | String | `#151513` | The background color of the corner. |
| color | String | `#fff` | The Github logo color of the corner. |
| position | String | `left`/`right` | The position of corner. |

## Development

```bash
# Step 1, Run first, the listener component compiles the output .js file
npm run ts:watch
# Step 2, Listen for compiled output type .d.ts file
npm run types:watch
# Step 3, Development mode, listen to compile preview site instance
npm run doc:dev
```

Compile and release

```bash
npm run released
```