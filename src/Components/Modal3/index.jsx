import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { Context } from '../../utils/Context.jsx';

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
  button: {
    alignItems: 'center',
  }
}));

export default function TransitionsModal() {

    const selectedText = () => {
    console.log("You selected some text");
}

  const classes = useStyles();

  const [ openModal ] = useState(null);

  const [localOption, setLocalOption] = useState([])
  const [open, setOpen] = useState(false);
  const [ isReactSelected, setIsReactSelected ] = useState(false)
  const [ isJSSelected, setIsJSSelected ] = useState(false)

  const { option, setOption } = useContext(Context)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkReact = () => isReactSelected && {topic: 'react'}

  const checkJs = () => isJSSelected && {topic: 'javaScript'}

  const handleOnClick = () => {
    handleClose()
    
    const rawdata = [checkReact(), checkJs()]

    const data = rawdata.filter(item => item !== false) 

    setOption(data)
  }

  const handleOnChangeReact = () => {
    if (isReactSelected) {
      setIsReactSelected(false)
    } else {
      setIsReactSelected(true)
    }
  }

  const handleOnChangeJS = () => {
    if (isJSSelected) {
      setIsJSSelected(false)
    } else {
      setIsJSSelected(true)
    }
  }

  return (
    <div>
      { openModal === null && (
        <Button type="button" onClick={handleOpen}>
          Agregar Temas
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
            <div>
            <label>
              JavaScript
            </label>
            <Checkbox
            color="primary"
            onChange={handleOnChangeJS}
            />
            <label>
              React
            </label>
            <Checkbox
            color="primary"
            onChange={handleOnChangeReact}
            />
            </div>
            <Button 
              onClick={handleOnClick}
              className={classes.button}>Guardar</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
