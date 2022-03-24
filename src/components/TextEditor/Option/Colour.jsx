import React from "react";
import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

import { background } from "../../../utils/constants/TextEditData";

import Plus from "../../../utils/assets/svg/Plus.svg";
import {
  OptionWrapper,
  ColorItem,
  ColourPalete,
  ColorItemPalete,
} from "../style";

function Colour({ option, setOption }) {
  const [paleteState, setPaletestate] = useState(false);
  const [colorPalete, setColorPalete] = useColor();
  const handleSetFonts = (color) => () => {
    setOption(color);
  };
  const handleClickPalete = () => {
    setPaletestate(!paleteState);
  };
  const handleSetFontsPelete = (e) => {
    setOption(e.hex);
    setColorPalete({ hex: e.hex, rgb: e.rgb, hsv: e.hsv });
  };

  return (
    <OptionWrapper>
      {background.map((color) => (
        <ColorItem
          key={color}
          option={option}
          onClick={handleSetFonts(color)}
          color={color}
        />
      ))}
      <ColorItemPalete>
        <img onClick={handleClickPalete} src={Plus} alt="Plus" />
      </ColorItemPalete>
      {paleteState && (
        <ColourPalete>
          <ColorPicker
            width={156}
            height={128}
            color={colorPalete}
            onChange={handleSetFontsPelete}
            hideHSV
            hideRGB
            hideHEX
          />
        </ColourPalete>
      )}
    </OptionWrapper>
  );
}

export default Colour;
