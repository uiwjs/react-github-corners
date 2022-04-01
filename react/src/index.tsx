import React from 'react';
import '@uiw/github-corners';

export interface GitHubCornersProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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
  /** Is it displayed at the bottom? */
  bottom?: boolean,
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

export default function githubCorners(props: GitHubCornersProps) {
  const { size = 80, fixed = false, bottom, zIndex, className, style, bgColor = '#151513', color = '#fff', position = 'right', ...otherProps } = props;
  const styl: React.CSSProperties = position === 'left' ? { left: 0, right: 'initial', transform: 'scale(-1, 1)' } : { right: 0, left: 'initial', transform: 'scale(1, 1)' };
  if (bottom) {
    styl.bottom = 0;
    styl.top = 'initial';
    styl.transform = position === 'left' ? 'scale(-1, -1)' : 'scale(1, -1)';
  } else {
    styl.bottom = 'initial';
    styl.top = 0;
  }
  return (
    <github-corners
      target="__blank"
      width={size}
      height={size}
      href={props.href}
      position={fixed ? 'fixed' : 'absolute'}
      z-index={zIndex}
      style={style}
      fill={bgColor}
      color={color}
      {...styl}
      {...otherProps}
    />
  );
}