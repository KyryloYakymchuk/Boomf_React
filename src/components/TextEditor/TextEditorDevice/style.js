import styled from "styled-components";

export const TextEditorDeviceContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100vw;
  height: 100vh;

  z-index: 3;
  opacity: 0;
  transition: 0.6s;
  pointer-events: none;

  ${({currentEditor}) =>
          currentEditor && "background: #222222; opacity:0.5; pointer-events: all;transition: 0.6s;"}
`;

export const DeviceDataTypeStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 5;
  width: 100vw;
  opacity: 0;

  ${({currentEditor}) =>
          currentEditor && "opacity:1; pointer-events: all;transition: 0.6s;"}
`

export const DeviceTypesStyle = styled(DeviceDataTypeStyle)`
  margin-top: 40px;
  overflow: auto;
  
  @media (max-width: 375px) {
    justify-content: flex-start
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DeviceDataType = styled(DeviceDataTypeStyle)`
  bottom: 0;
`;