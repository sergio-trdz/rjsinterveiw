import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Context } from '../../utils/Context.jsx';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // position: "absolute",
    // top: "140px",
    // left: "200px"
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    display: 'flex'
  }
});

const SimpleCard = ({ candidato }) => {

  const { setCandidato } = useContext(Context)
  const [name, setName] = useState()
  const [id, setId] = useState()
  const [correo, setCorreo] = useState()

  const classes = useStyles();

  useState(() => {
    setName(candidato?.name)
    setId(candidato?.numId)
    setCorreo(candidato?.correo)
  }, [candidato])

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleId = (event) => {
    setId(event.target.value)
  }

  const handleCorreo = (event) => {
    setCorreo(event.target.value)
  }

  const handleUpdate = () => {
    setCandidato({name, id, correo})
  }

  const handleDelete = () => {
    setCandidato(null)
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.container}>
        <TextField onChange={handleName} value={name} id="standard-basic" label="name" />
        <TextField onChange={handleId} value={id} id="standard-basic" label="Id" /> 
        <TextField onChange={handleCorreo} value={correo} id="standard-basic" label="correo" /> 
        <div className={classes.button}>
          <Button onClick={handleUpdate} variant="contained">Actualizar</Button>
          <Button onClick={handleDelete} variant="contained">Eliminar</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default SimpleCard;
