import axios from 'axios'
//metoder er i try catch normalt, til håndtering af fejl.
const getImages = async () => {
   var result = await  axios.get("FlickImages/getImages")
    return result.data;
}

const getImagesByTag = async (tag) => {
    var result = await axios.get("FlickImages/getImagesByTag",{params: {tag: tag}})
    return result.data;
}

export default{ getImages, getImagesByTag}