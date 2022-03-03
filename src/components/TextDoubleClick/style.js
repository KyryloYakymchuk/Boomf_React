import styled from "styled-components";

export const FormTextContent = styled.div`
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;

  top: auto;
  left: auto;
  right: auto;
  bottom: auto;

  width: 76%;
  height: 23%;
  margin-bottom: 45px;
  border: 1px dashed #F5F5F5;
  box-sizing: border-box;
  border-radius: 8px;

  overflow: hidden;

  word-break: break-word;
  z-index: 1;
`

export const DivThree = styled.div`
  position: absolute;
  left: -12px;
  top: 20px;
`

export const CenterRotate = styled.div`
  position: absolute;
  height: 1px;
  width: 1px;
  right: 50%;
`

export const DivTextContent = styled.div`
  font-family: ${({ textStyles }) =>
          textStyles.font ? `${textStyles.font}` : "Objectivity"};
  font-size: ${({ textStyles }) =>
          textStyles.size ? `${textStyles.size}px` : "20px"};
  color: ${({ textStyles }) =>
          textStyles.colour ? `${textStyles.colour}` : "#222222"};
  text-align: ${({ textStyles }) =>
          textStyles.alignment ? `${textStyles.alignment}` : "center"};

  padding: 8px;

  cursor: pointer;
  min-width: 195px;
  min-height: 18px;
`