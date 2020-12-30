import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import ViewQuestions from '../../Components/Carousel/index.jsx'

const useStyles = makeStyles ((theme) => ({
    container: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      height: "80vh",
    }
  }));
  

const Preguntas = () => {

    const history = useHistory()

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1>Preguntas</h1>
            <ViewQuestions/>
            <Button onClick={() => history.push('/resultados')}>Finalizar</Button>
        </div>
    )
}

export default Preguntas;