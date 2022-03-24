import React from "react";
import { background } from "../../../utils/constants/TextEditData";
import {
  OptionWrapper,
  ColorItem,
  ColourPalete,
  ColorItemPalete,
} from "../style";

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useState } from "react";

function Colour({ option, setOption, colourDevice }) {
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
    <OptionWrapper colourDevice={colourDevice}>
      {background.map((color) => (
        <ColorItem
          key={color}
          option={option}
          onClick={handleSetFonts(color)}
          color={color}
        />
      ))}
      <ColorItemPalete onClick={handleClickPalete}>
        <span>+</span>
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
