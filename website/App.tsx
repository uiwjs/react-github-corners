import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GitHubCorners, { GitHubCornersProps} from '../';
import MDStr from '../README.md';

const App: React.FC = () => {
  const [size, setSize] = useState(80);
  const [bgColor, setBgColor] = useState('#151513');
  const [color, setColor] = useState('#fff');
  const [position, setPosition] = useState<GitHubCornersProps['position']>('right');
  return (
    <div className="App">
      <GitHubCorners
        size={size}
        bgColor={bgColor}
        color={color}
        position={position}
        href="https://github.com/uiwjs/react-github-corners"
      />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GitHub Corners for React.
        </p>
        <div>
          <button onClick={() => {setSize(120)}}>Set Size 120px</button>
          <button onClick={() => {setSize(80)}}>Set Size 80px</button>
          <button onClick={() => {setPosition('left')}}>Left</button>
          <button onClick={() => {setPosition('right')}}>Right</button>
        </div>
        <div>
          <button onClick={() => {setBgColor('#F95C2B')}}>Orange #F95C2B</button>
          <button onClick={() => {setBgColor('#28a745')}}>Green #28a745</button>
          <button onClick={() => {setBgColor('#dc3545')}}>Red #dc3545</button>
          <button onClick={() => {setBgColor('#008EF0')}}>Blue #008EF0</button>
          <button onClick={() => {setBgColor('#fff'), setColor('#151513')}}>Light</button>
          <button onClick={() => {setBgColor('#151513'), setColor('#fff')}}>Dark</button>
        </div>
        <div>
        </div>
        <pre className="info">
          {MDStr}
        </pre>
      </div>
    </div>
  );
}

export default App;
