import styled from "styled-components";

export const PanelContainer = styled.div`
  width: 198px;
  height: 100vh;
  background: #2edbe3;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 4;

  @media (max-width: 1130px) {
    height: unset;
    order: 3;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    z-index: 2;
  }
`;

export const LogoIcon = styled.img`
  margin-top: 30px;
  @media (max-width: 1130px) {
    display: none;
  }
  @media (max-height: 785px) {
    margin: 15px;
  }
`;

export const Option = styled.div`
  background: #ffffff;
  width: 119px;
  border-radius: 16px;
  margin: 32px 42px 17px 42px;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.08),
    0px 0.5px 2px rgba(96, 97, 112, 0.16);
  @media (max-width: 1130px) {
    margin: 16px 14px !important;
    width: 70px;
  }
  @media (max-width: 490px) {
    margin: 16px 8px !important;
    padding: 14px;
  }

  @media (max-height: 720px) {
    margin: 4px 6px;
  }
  padding: 17px;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0px 2px 4px rgba(53, 53, 53, 0.281))
      drop-shadow(0px 8px 16px rgba(53, 53, 53, 0.281));
    transition: 0.4s;
  }
  transition: 0.4s;
`;
export const OptionIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.img`
  width: 35px;
  height: 50px;
  @media (max-width: 1130px) {
    display: block;
    width: 25px;
  }
`;

export const OptionText = styled.div`
  color: #222222;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  font-weight: 400;
  padding-bottom: 16px;
  margin-top: -10px;
  font-family: "objectivity-regular-11", sans-serif;
  @media (max-width: 1130px) {
    display: none;
  }
  @media (max-height: 785px) {
    font-size: 14px;
  }
  @media (max-height: 615px) {
    padding-bottom: 10px;
    font-size: 12px;
  }
`;

//sidebar open
export const SideBarWindow = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(249, 249, 249, 0.84);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  z-index: 5;
  opacity: 0;
  transition: 0.4s;
  pointer-events: none;
  ${({ currentSidebar }) =>
    currentSidebar && "opacity:1; pointer-events: all;transition: 0.4s;"}
`;
export const SideBarContent = styled.div`
  font-family: "objectivity-regular-11", sans-serif;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(40, 41, 61, 0.04),
    0px 16px 24px rgba(96, 97, 112, 0.16);
  width: 0vw;
  transition: 0.4s;
  ${({ currentSidebar }) =>
    currentSidebar &&
    "width: 45vw;transition: 0.4s;@media(max-width:1130px){width:100%};"};
  height: 100vh;
  overflow: auto;
`;

export const SideContent = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
`;

export const SideBarTitle = styled.div`
  width: 40vw;
  //position: sticky;
  top: 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 42px;
  @media (max-width: 1130px) {
    width: 80vw;
  }
`;

export const Title = styled.div`
  font-family: "objectivity-regular-11", sans-serif;
  font-weight: bold;
  font-size: 28px;
  color: #222222;
`;
export const Close = styled.div`
  cursor: pointer;
`;

export const DivBackTitle = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

export const DivArrowLeft = styled.div`
  width: 19px;
  height: 19px;
  padding-right: 10px;
  cursor: pointer;
`;
