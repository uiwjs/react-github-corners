import { useState } from 'react';
import GitHubCorners, { GitHubCornersProps } from '@uiw/react-github-corners';
import styled, { css } from 'styled-components';
import { SelectColor } from './components/SelectColor';

const Wrapper = styled.main`
  background-color: var(--color-theme-bg);
  .arrow {
    position: fixed;
    right: 18px;
    top: 32px;
  }
`;

const Header = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  a {
    color: #09d3ac;
  }
`;

export const Button = styled.button<{ $select?: boolean; }>`
  position: relative;
  display: inline-block;
  border: 0 solid;
  padding: 5px 10px;
  margin: 0 2px;
  font-size: 12px;
  font-weight: 700;
  text-shadow: 0 1px hsla(0, 0%, 100%, .9);
  box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
  cursor: pointer;
  transition: all .3s;
  &:hover {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.38);
  }
  &:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.38);
  }
  ${({ $select }) => $select && css`
    color: #333 !important;
    text-shadow: 0 1px hsl(0deg 0% 100% / 90%), 0 -1px hsl(0deg 0% 100% / 90%), 1px 0px hsl(0deg 0% 100% / 90%), -1px 0px hsl(0deg 0% 100% / 90%) !important;
  `}
`;

export const ButtonGroup = styled.div`
  padding-bottom: 12px;
`;

const APP = () => {
  const [size, setSize] = useState(80);
  const [bgColor, setBgColor] = useState('#151513');
  const [color, setColor] = useState('#fff');
  const [position, setPosition] = useState<GitHubCornersProps['position']>('right');
  const [bottom, setBottom] = useState<boolean>(false);
  return (
    <Wrapper>
      <GitHubCorners
        size={size}
        bgColor={bgColor}
        color={color}
        position={position}
        bottom={bottom}
        fixed
        zIndex={99}
        target="__blank"
        style={{ color: 'red' }}
        href="https://github.com/uiwjs/react-github-corners"
      />
      <svg className="arrow" viewBox="0 0 1024 1024" width="160" height="160">
        <path d="M819.103329 271.553343c-43.724084 116.925762-85.260531 200.227804-132.751217 259.863272-23.748923 29.828476-48.965818 53.774322-76.803581 73.230322-27.841343 19.45242-58.328615 34.429315-92.700643 46.183832-8.664615 2.98249-22.073287 5.066294-37.286489 5.048392-24.622545 0.025063-54.075077-5.349147-78.045986-19.137343-12.005147-6.888727-22.656895-15.818294-30.952728-27.214769-8.292252-11.407217-14.293035-25.295664-16.860195-42.485259a73.463049 73.463049 0 0 1-0.809175-10.862993c0.00358-13.412252 3.691413-26.20151 10.229258-38.006154 9.788867-17.694434 26.086937-33.075916 45.331693-43.917426 19.230434-10.859413 41.335944-17.146629 62.370909-17.135888 18.360392 0.007161 35.814937 4.715413 50.387245 15.066405 9.72442 6.881566 17.823329 18.367552 23.390881 32.785902 5.578294 14.393287 8.607329 31.607944 8.600168 49.424112 0.00358 18.00951-3.079161 36.624112-9.495273 53.634686-6.416112 17.021315-16.133371 32.402797-29.327217 44.250405-52.549818 47.200671-107.391105 89.188252-179.099748 123.277427-71.708643 34.082014-160.406378 60.297846-280.672672 75.446601l1.79021 14.210685c121.412028-15.284811 211.735273-41.880168 285.033623-76.72123 73.29835-34.830322 129.45007-77.877706 182.522629-125.558154 15.184559-13.644979 26.069035-31.049399 33.158266-49.853762 7.089231-18.815105 10.415441-39.055217 10.419021-58.686658-0.007161-19.427357-3.254601-38.263944-9.566881-54.594238-6.323021-16.305231-15.725203-30.222322-28.453595-39.291524-17.350713-12.330965-37.898741-17.723077-58.679496-17.712336-31.819189 0.039385-64.42249 12.406154-89.492588 32.581819-12.524308 10.103944-23.168895 22.202182-30.737902 35.850741-7.565427 13.637818-12.026629 28.872503-12.023049 44.948587 0 4.275021 0.315077 8.607329 0.966713 12.97186 2.867916 19.327105 9.799608 35.560727 19.44884 48.8047 14.482797 19.892811 34.855385 32.943441 56.345063 41.006545 21.518322 8.066685 44.253986 11.235357 64.229146 11.242518 16.512895-0.017902 31.081622-2.13393 41.919553-5.818182 35.442573-12.11614 67.233119-27.701706 96.273902-47.995525 43.577287-30.440727 80.856615-71.42221 115.379021-126.703888 34.533147-55.29242 66.395301-124.910098 99.388867-213.113734l-13.426573-5.019748z" fill="#8f8f8f"></path>
        <path d="M743.040895 344.686993l77.544727-57.802294 13.4767 85.400168a7.160839 7.160839 0 0 0 14.146237-2.230601l-15.324195-97.10814a7.139357 7.139357 0 0 0-4.371693-5.513846 7.142937 7.142937 0 0 0-6.981818 0.891524l-87.050741 64.884364a7.160839 7.160839 0 1 0 8.560783 11.478825z" fill="#8f8f8f"></path>
      </svg>
      <Header>
        <ButtonGroup>
          <Button onClick={() => {setSize(120)}}>Set Size 120px</Button>
          <Button onClick={() => {setSize(80)}}>Set Size 80px</Button>
          <Button onClick={() => {setPosition(position === 'left' ? 'right' : 'left')}}>{position === 'right' ? 'Right' : 'Left'}</Button>
          <Button onClick={() => setBottom(!bottom)}>{bottom ? 'Top' : 'Bottom'}</Button>
        </ButtonGroup>
        <input type="range" value={size} min="50" style={{ minWidth: 320 }} max="220" onChange={(evn) => setSize(Number(evn.target.value))}/>
        <ButtonGroup>
          <Button onClick={() => {setBgColor('#F95C2B')}} style={{ backgroundColor: '#F95C2B' }}>Orange #F95C2B</Button>
          <Button onClick={() => {setBgColor('#28a745')}} style={{ backgroundColor: '#28a745' }}>Green #28a745</Button>
          <Button onClick={() => {setBgColor('#dc3545')}} style={{ backgroundColor: '#dc3545' }}>Red #dc3545</Button>
          <Button onClick={() => {setBgColor('#008EF0')}} style={{ backgroundColor: '#008EF0' }}>Blue #008EF0</Button>
          <Button onClick={() => {setBgColor('#fff'); setColor('#151513')}} style={{ backgroundColor: '#fff', color: '#151513' }}>Light</Button>
          <Button onClick={() => {setBgColor('#151513'); setColor('#fff')}} style={{ backgroundColor: '#151513', color: '#fff' }}>Dark</Button>
        </ButtonGroup>
        <ButtonGroup>
          <SelectColor color={bgColor} onChange={setBgColor}>
            @ Background Color
          </SelectColor>
          <SelectColor color={color} onChange={setColor}>
            @ Logo Color
          </SelectColor>
        </ButtonGroup>
      </Header>
    </Wrapper>
  );
}

export default APP;