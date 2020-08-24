import React, { useState, useEffect } from 'react';
import SearchBox from "./SearchBox";
import ImagesView from "./ImagesView";
import flickrService from "../Services/flickrService"

export default function Home(){
  const [search,setSearch] = useState("");
  const [images, setImages] = useState();

  const onSearch = (value) => {
    setSearch(value);
  }

  useEffect( () => {
    async function getData(){
      const data = search ?
      await flickrService.getImagesByTag(search) :
        await flickrService.getImages();
     setImages(data);
    }

    getData()

  },[search])

  return(
    <div>
      <SearchBox onSearch={onSearch}></SearchBox>
      <ImagesView images={images}></ImagesView>
    </div>
  )

}
