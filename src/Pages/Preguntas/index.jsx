import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Context } from '../../utils/Context.jsx';
import { useHistory } from 'react-router-dom';
import ViewQuestions from '../../Components/Carousel/index.jsx'

const useStyles = makeStyles ((theme) => ({
    container: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      height: "80vh"
    }
  }));
  

const Preguntas = () => {

    const history = useHistory()

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <ViewQuestions/>
            <Button onClick={() => history.push('/resultados')}>Finalizar</Button>
        </div>
    )
}

export default Preguntas;