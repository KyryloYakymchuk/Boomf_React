import React, {useEffect, useState} from 'react';
import {
  BackgroundImage,
  BackgroundItem,
  TitleCannon
} from "../../../Confetti/Cannon/style";
import {useDispatch, useSelector} from "react-redux";
import {DeviceContentCard, DivFlexCenter} from "../../../Confetti/Cannon/MobileDevices/style";
import {setSelectedBackground} from "../../../../redux/actions/background";
import {setSelectedConfetti} from "../../../../redux/actions/confetti";

const MobileDeviceColumn = () => {
  const [mobileDevice, setMobileDevice] = useState(window.matchMedia("(max-width: 1130px)").matches);

  const {confettiState} = useSelector(
    ({confettiReducer}) => confettiReducer
  );
  const {backgroundState} = useSelector(
    ({backgroundReducer}) => backgroundReducer
  );

  const selectBackground = () => {
    dispatch(setSelectedBackground(true));
    dispatch(setSelectedConfetti(false));
  }

  const selectConfetti = () => {
    dispatch(setSelectedConfetti(true));
    dispatch(setSelectedBackground(false));
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMobileDevice(window.matchMedia("(max-width: 1130px)").matches)
    });
  }, [])

  const dispatch = useDispatch();
  return mobileDevice && (
    <DeviceContentCard>
      <DivFlexCenter>
        <BackgroundItem
          onClick={selectConfetti}
          name={confettiState.name}
        >
          <BackgroundImage
            src={confettiState.img}
            alt={confettiState.name}
          />
        </BackgroundItem>
        <TitleCannon>Confetti</TitleCannon>
      </DivFlexCenter>

      <DivFlexCenter>
        <BackgroundItem
          onClick={selectBackground}
          name={backgroundState.name}
        >
          <BackgroundImage
            src={backgroundState.img}
            alt={backgroundState.name}
          />
        </BackgroundItem>
        <TitleCannon>Background</TitleCannon>
      </DivFlexCenter>

    </DeviceContentCard>
  );
};

export default MobileDeviceColumn;