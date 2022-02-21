import React from 'react';
import {AddButton, BackgroundImage, ImageDiv, ImageNotContent} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {setImageContent} from "../../../../utils/functions/cannon";
import {EditButton, EditIcon} from "../../Boomb/CubeSection/style";
import EditPencil from "../../../../utils/assets/svg/EditPencil.svg";
import {setCurrentEditor} from "../../../../redux/actions/textEditor";

const PostcardImage = () => {
  const dispatch = useDispatch();
  const {imageState} = useSelector(({cannonReducer}) => cannonReducer);

  const openEditor = () => {
    dispatch(setCurrentEditor({flag: "Image", state: true}));
  };

  return (
    <>
      {imageState ? (
        <ImageDiv>
          <BackgroundImage src={imageState}/>
          <EditButton onClick={openEditor}>
            <EditIcon src={EditPencil} alt="edit"/>
          </EditButton>
        </ImageDiv>
      ) : (
        <ImageNotContent>
          <AddButton onClick={() => setImageContent(dispatch)}>
            + Add Image
          </AddButton>
        </ImageNotContent>
      )}
    </>
  );
};

export default PostcardImage;