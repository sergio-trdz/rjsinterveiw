import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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
    minHeight: '60vh',
    minWidth: '60vw',
    overflowY: 'auto',
    maxHeight: '100%',
    
  },
}));

export default function TransitionsModal() {

    const { questions } = useContext(Context)

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Button type="button" onClick={handleOpen}>
    Ver respuestas
    </Button>
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
            {
              questions?.map(item => (
                <div key={item?.id}>
                  <p>{`Pregunta: ${item?.question}`}</p>
                  <p>{`Respuesta: ${item?.correct ? 'Correcto' : 'Incorrecto'}`}</p>
                  <p>{`Comentario: ${item?.comentario}`}</p>
                </div>
              ))
            }
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
