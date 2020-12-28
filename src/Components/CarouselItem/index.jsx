import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { Context } from '../../utils/Context.jsx';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({

  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "80vh"
  },
  comentarios: {
    padding: "1rem"
  }
}));

const CarouselItem = ({id, question, topic}) => {

  const { questions, setQuestions } = useContext(Context)
  const [ comentario, setComentario ] = useState('')
  const classes = useStyles();
  
  const handleOnChange = (evento) => {
      setComentario(evento.target.value)
  }

  const handleOnCorrecto = () => {
    const newVariables = questions?.map(question => question?.id === id ? {...question, correct:true} : question)

    setQuestions(newVariables)
  }

  const handleOnFalso = () => {
    const newVariables = questions?.map(question => question?.id === id ? {...question, correct:false} : question)

    setQuestions(newVariables)
  }

  const handleComentario = () => {
    const newVariables = questions?.map(question => question?.id === id ? {...question, comentario} : question)

    setQuestions(newVariables)
  }

    return (
        <div className={classes.container}>
            <small>{topic}</small>
            <h1>{question}</h1>
            <div>
            <Button onClick={handleOnFalso}>Incorrect</Button>
            <Button onClick={handleOnCorrecto}>Correcto</Button>
            </div>
            <small className={classes.comentarios}>Comentarios</small>
            <TextareaAutosize onChange={handleOnChange} value={comentario} aria-label="empty textarea" placeholder="Agrega un comentario" />
            <Button disabled={comentario.length === 0 ? true : false} onClick={handleComentario}>Guardar</Button>
        </div>
    )
}

export default CarouselItem;