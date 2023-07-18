import { Fragment, useEffect, useRef, useState } from "react";
import Sketch from '@uiw/react-color-sketch';
import { hexToHsva, hsvaToHexa } from '@uiw/color-convert';
import { Button } from '../App';

export interface SelectColorProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  onChange?(color: string): void;
  color?: string;
}

export function SelectColor(props: SelectColorProps) {
  const { onChange, color: initColor, children } = props;
  const [color, setColor] = useState(hexToHsva(initColor || '#fff'));
  const [selectColor, setSelectColor] = useState(false);
  const btnref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    setColor(hexToHsva(props.color || '#fff'))
  }, [props.color]);

  useEffect(() => {
    document.body.addEventListener('click', (evn) => {
      const target = evn.target as HTMLElement;
      setSelectColor(btnref.current!.contains(target));
    });
  }, [])
  return (
    <Fragment>
      <Button $select ref={btnref} style={{ backgroundColor: hsvaToHexa(color) }}>
        {children}
        {selectColor && (
          <Sketch
            style={{ position: 'absolute', zIndex: 99 }}
            color={color}
            onChange={(color) => {
              setColor(color.hsva);
              onChange && onChange(color.hex);
            }}
          />
        )}
      </Button>
    </Fragment>
  )
}