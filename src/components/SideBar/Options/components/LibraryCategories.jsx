import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getBoomfImages, searchImage } from "../../../../redux/actions/images";

import { DivUploadImage, TitleCollection } from "../style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LibraryCategories({ categories, setSubTitle }) {
  const dispatch = useDispatch();
  const handleSetCategories = (e) => () => {
    dispatch(getBoomfImages({ productType: "exploding_card", name: e.slug }));
    setSubTitle(e.name);
  };

  useEffect(() => {
    dispatch(searchImage(""));
  }, []);
  return (
    <>
      {categories?.map((data) => (
        <div key={data.id}>
          <DivUploadImage>
            <LazyLoadImage
              onClick={handleSetCategories(data)}
              src={data.image}
              alt={data.name}
              effect="blur"
            />
          </DivUploadImage>
          <TitleCollection>{data.name}</TitleCollection>
        </div>
      ))}
    </>
  );
}

export default LibraryCategories;
