react-github-corners
===

Add a Github corner to your project page, This GitHub corners for react component.

```bash
npm install --save @uiw/react-github-corners
# Via Yarn:
yarn add @uiw/react-github-corners
```

## Documentation

| Property Name | Type | Default Value | Description |
| ---- | ---- | ---- | ---- |
| href | String | - | The link to your project page. |
| size | String | `80` | The width and height of the corner. |
| bgColor | String | `#151513` | The background color of the corner. |
| color | String | `#fff` | The Github logo color of the corner. |
| position | String | `#fff` | The position of corner. |

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