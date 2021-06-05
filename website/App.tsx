import React, { useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import logo from './logo.svg';
import './App.css';
import GitHubCorners, { GitHubCornersProps } from '../';
import MDStr from '../README.md';

const APP = () => {
  const [size, setSize] = useState(80);
  const [bgColor, setBgColor] = useState('#151513');
  const [color, setColor] = useState('#fff');
  const [position, setPosition] = useState<GitHubCornersProps['position']>('right');
  const [bottom, setBottom] = useState<boolean>(false);
  return (
    <div className="App">
      <GitHubCorners
        size={size}
        bgColor={bgColor}
        color={color}
        position={position}
        bottom={bottom}
        fixed
        zIndex={99}
        target="__blank"
        href="https://github.com/uiwjs/react-github-corners"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GitHub Corners for React.
        </p>
        <div className="App-button">
          <button onClick={() => {setSize(120)}}>Set Size 120px</button>
          <button onClick={() => {setSize(80)}}>Set Size 80px</button>
          <button onClick={() => {setPosition('left')}}>Left</button>
          <button onClick={() => {setPosition('right')}}>Right</button>
          <button onClick={() => setBottom(!bottom)}>{bottom ? 'Top' : 'Bottom'}</button>
        </div>
        <div className="App-button">
          <button onClick={() => {setBgColor('#F95C2B')}} style={{ backgroundColor: '#F95C2B' }}>Orange #F95C2B</button>
          <button onClick={() => {setBgColor('#28a745')}} style={{ backgroundColor: '#28a745' }}>Green #28a745</button>
          <button onClick={() => {setBgColor('#dc3545')}} style={{ backgroundColor: '#dc3545' }}>Red #dc3545</button>
          <button onClick={() => {setBgColor('#008EF0')}} style={{ backgroundColor: '#008EF0' }}>Blue #008EF0</button>
          <button onClick={() => {setBgColor('#fff'); setColor('#151513')}} style={{ backgroundColor: '#fff', color: '#151513' }}>Light</button>
          <button onClick={() => {setBgColor('#151513'); setColor('#fff')}} style={{ backgroundColor: '#151513', color: '#fff' }}>Dark</button>
        </div>
      </header>
      <MarkdownPreview className="App-markdown" source={MDStr.replace(/([\s\S]*)<!--dividing-->/, '')} />
      <div className="App-footer">
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
      </div>
    </div>
  );
}

export default APP;