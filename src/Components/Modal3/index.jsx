import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
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

  const classes = useStyles();

  const [localOption, setLocalOption] = useState([])
  const [uniqueValues, setUniqueValues] = useState(new Set)
  const [open, setOpen] = useState(false);

  const { option, setOption } = useContext(Context)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnClick = () => {
    handleClose()
    
    localOption.forEach(item => uniqueValues.add(item.topic))

    setOption(uniqueValues)
  }

  const handleOnChange = (value) => {
    setLocalOption(values => values.concat(value))
  }

  return (
    <div>
      { option === null && (
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
            onChange={() => handleOnChange({topic: "javaScript"})}
            />
            <label>
              React
            </label>
            <Checkbox
            color="primary"
            onChange={() => handleOnChange({topic:"react"})}
            />
            </div>
          <Button onClick={handleOnClick}>Guardar</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
