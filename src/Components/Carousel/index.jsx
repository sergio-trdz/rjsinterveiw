import React, { useContext, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../utils/Context.jsx';
import CarouselItem from '../CarouselItem/index.jsx';
import reactQuestions from '../../utils/questions.js';

const useStyles = makeStyles ({
  container: {
    height: "80vh",
  }
});

const ViewQuestions = () => {

  const { setQuestions, questions } = useContext(Context)

  const classes = useStyles();

  useEffect(() => {
    setQuestions(reactQuestions)
  } ,[])

    return (
        <Carousel className={classes.container} autoPlay={false} fullHeightHover={true}>
            {
              questions?.map(item => <CarouselItem 
                key={item?.id}
                id={item?.id} 
                topic={item?.topic} 
                question={item?.question}
                />)
            }
        </Carousel>
    )
}

export default ViewQuestions;
