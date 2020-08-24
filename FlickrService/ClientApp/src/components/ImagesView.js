import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

//I forhold til strukturen af compoennts, er min preference normalt, at lave en mappe til hver component under Components mappen, og her vil der være en css fil til hver component. (Også en component test).
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

//vidste ikke helt lige hvordan man håndterede dette slags response fra flickr, i forhold til billedet, så lavede en ikke så god løsning til det :)
const getImageFromMedia =  (mediaStr) => {
    var result = mediaStr.slice(0,-1);
    result = result.substring(3);
    console.log(result)
    return result
}


export default function ImageView(props) {
    const classes = useStyles();

    useEffect(()=> {
    })
    return(
        <div>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.images ?props.images.map((image) => (
          <GridListTile key={image.media} >
            <img src={getImageFromMedia(image.media)} alt={image.title} />
          </GridListTile>
        )) : "no result found"}
      </GridList>
        </div>
    )
}