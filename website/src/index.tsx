import React from 'react';
import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import data from '@uiw/react-github-corners/README.md';
import styled from 'styled-components';
import App from './App';
const Footer = styled.footer`
  text-align: center;
  padding: 30px 0 50px 0;
  a {
    display: inline-block;
    margin: 0 5px;
  }
`;

const Github = MarkdownPreviewExample.Github;
const Example = MarkdownPreviewExample.Example;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    title="GitHub Corners for React"
    version={`v${VERSION}`}
  >
    <Github href="https://github.com/uiwjs/react-github-corners" />
    <Example>
      <App />
    </Example>
    <Footer>
        <a href="https://github.com/uiwjs/react-github-corners/issues">
          <img src="https://img.shields.io/github/issues/uiwjs/react-github-corners.svg" alt="" />
        </a>
        <a href="https://github.com/uiwjs/react-github-corners/network">
          <img src="https://img.shields.io/github/forks/uiwjs/react-github-corners.svg" alt="" />
        </a>
        <a href="https://github.com/uiwjs/react-github-corners/stargazers">
          <img src="https://img.shields.io/github/stars/uiwjs/react-github-corners.svg" alt="" />
        </a>
        <a href="https://github.com/uiwjs/react-github-corners/releases">
          <img src="https://img.shields.io/github/v/release/uiwjs/react-github-corners.svg" alt="" />
        </a>
        <a href="https://www.npmjs.com/package/@uiw/react-github-corners">
          <img src="https://img.shields.io/npm/v/@uiw/react-github-corners.svg" alt="" />
        </a>
      </Footer>
  </MarkdownPreviewExample>,
);
