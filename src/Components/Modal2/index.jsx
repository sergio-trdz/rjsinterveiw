import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Context } from '../../utils/Context.jsx'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {

  const { setCandidato, candidato } = useContext(Context)

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [ name, setName ] = useState("");
  const [ numId, setNumId ] = useState("");
  const [ correo, setCorreo ] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleName = (event) => setName(event.target.value)

  const handleId = (event) => setNumId(event.target.value)

  const handleCorreo = (event) => setCorreo(event.target.value)

  const handleOnClick = () => {
    handleClose()
    setCandidato({name, numId, correo})
  }

  return (
    <div>
      { candidato === null && (
        <Button type="button" onClick={handleOpen}>
          Agregar Candidato
        </Button>
      ) }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <TextField onChange={handleName} value={name} id="standard-basic" label="Nombre" />
          <TextField onChange={handleId} value={numId} id="standard-basic" label="Id" />
          <TextField onChange={handleCorreo} value={correo} id="standard-basic" label="Correo" />
          <Button onClick={handleOnClick}>Guardar</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
