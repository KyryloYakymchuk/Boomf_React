import styled from "styled-components";
import {
  CubeContainer,
  CubeItem,
  SideContent,
  TopText
} from "../../Boomb/CubeSection/style";

export const PostcardBlock = styled(SideContent)`
  width: 62%;
  @media (max-width: 920px) {
    display: flex;
    align-items: flex-end;
    margin-bottom: 30px;
    width: 100%;
  }
`

export const PostcardContainer = styled(CubeContainer)`
  width: 100%;
  height: 100%;
  align-items: flex-start;
`

export const PostcardWrapper = styled.img`
  position: absolute;
  width: 100%;
  height: 90%;
  object-fit: cover;
`

export const BackgroundCard = styled.div`
  display: flex;
  height: ${({sizeCard: {height}}) => height ? `${height}px` : 'auto'};
  width: ${({sizeCard: {width}}) => width ? `${width}px` : 'auto'};;
  margin-top: 40px;
  position: relative;
  user-select: none;
  overflow: hidden;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 920px) {
    height: 630px;
    width: 390px;
  }

  @media (max-width: 840px) {
    height: 525px;
    width: 335px;
    margin-bottom: 30px;
  }
`

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  -moz-background-size: 100%;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
  transform: scale(${({increaseSize}) => increaseSize || 1});
`

export const ImageDiv = styled(CubeItem)`
  width: 76%;
  height: 50%;
  padding: initial;
  margin-top: 45px;
  background: white;

  @media (max-width: 920px) {
    height: 40%;
    width: 80%;
    margin: 30px 30px 0 30px;
  }
`

export const ImageNotContent = styled(ImageDiv)`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  background: #F5F5F5;
`

export const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  pointer-events: all;
  width: 135px;
  height: 32px;
  z-index: 1;
  background: #FF328B;

  box-shadow: 0 0 1px rgba(40, 41, 61, 0.04), 0 2px 4px rgba(96, 97, 112, 0.16);
  border-radius: 4px;
  border-color: transparent;
  color: #FFFFFF;
  cursor: pointer;
`


export const ImageContent = styled(ImageDiv)``

export const PostcardButton = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 40px;

  @media (max-width: 920px) {
    margin: 0 20px 0 0;
    z-index: 1;
    bottom: auto;
  }
`

export const PostcardText = styled(TopText)`
  opacity: 0;
  transform: none;
  left: auto;
  top: auto;
  height: auto;
`

