import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {setCurrentModal} from "../../../../redux/actions/modal";

import MobileDeviceColumn from "./MobileDeviceColumn";
import PostcardImage from "./PostcardImage";

import ArrowRightIcon from "../../../../utils/assets/svg/ArrowRightIcon.svg";
import {FormTextContent} from "../../../TextDoubleClick/style";
import {
  BackgroundCard,
  BackgroundImage,
  PostcardBlueButton,
  PostcardButton,
  PostcardContainer,
  PostcardWrapper,
  PostcardTest,
} from "./style";
import TextDoubleClick from "../../../TextDoubleClick";

const PostcardSection = ({editTextRef}) => {
  const [sizeCard, setSize] = useState({
    height: window.innerWidth / 100 * 40,
    width: window.innerWidth / 100 * 40 / 1.5
  });

  const {confettiState} = useSelector(({confettiReducer}) => confettiReducer);
  const {backgroundState} = useSelector(({backgroundReducer}) => backgroundReducer);

  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(setCurrentModal({title: "Add to cart", state: true}));
  };

  useEffect(() => {
    // window.addEventListener('resize', () => {
    //   setSize((e) => ({
    //     height: window.innerWidth / 100 * 40,
    //     width: window.innerWidth / 100 * 40 / 1.5
    //   }));
    // });  TODO
  }, [])

  return (
    <PostcardTest>
      <PostcardContainer>
        <PostcardWrapper
          src={confettiState.img}
          alt={confettiState.name}
        />
        <MobileDeviceColumn />
        <BackgroundCard sizeCard={sizeCard}>
          <BackgroundImage
            src={backgroundState.img}
            alt={backgroundState.name}
          />
          <PostcardImage/>
          <FormTextContent
            id="buttonClickCannon"
            ref={ref => editTextRef.current[1] = ref}
          >
            <TextDoubleClick
              buttonflag='buttonClickCannon'
              column={1}
            />
          </FormTextContent>
        </BackgroundCard>
      </PostcardContainer>
      <PostcardButton>
        <PostcardBlueButton onClick={handleButtonClick}>
          Add to cart <img src={ArrowRightIcon} alt="add"/>
        </PostcardBlueButton>
      </PostcardButton>
    </PostcardTest>
  );
};

export default PostcardSection;