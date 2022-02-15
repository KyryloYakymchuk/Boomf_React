import React from "react";

import {
  setBoxImage,
  setBoxPosition,
  findBoxSide,
} from "../../../../utils/functions/boomb";

import { CubeItem, CubeSide, NoImage } from "./style";

export const CubePosition = ({
  setCurrPosition,
  setCurrentImage,
  cubeData,
  currPosition,
}) => {
  const { rotate, img, position } = cubeData;
  return (
    <CubeSide spinParam={rotate}>
      <input
        onChange={(e) => setBoxImage(e, setCurrentImage)}
        style={{ display: "none" }}
        type="file"
        id="imageUpload"
        accept=".png, .jpg, .jpeg"
      />
      <CubeItem
        position={position}
        currPosition={currPosition}
        onClick={setBoxPosition(position, setCurrPosition)}
        htmlFor="imageUpload"
        img={img}
      >
        {img ? (
          <>
            <img src={img} alt={`side ${position}`} />
          </>
        ) : (
          <NoImage>+ Photo {findBoxSide(position)}</NoImage>
        )}
      </CubeItem>

      {/* <BoxInfoSide position={position}>
        {findBoxSide(position)} side
      </BoxInfoSide> */}
    </CubeSide>
  );
};
