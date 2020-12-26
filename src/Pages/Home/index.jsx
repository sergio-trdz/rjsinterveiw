import React, { useState } from 'react';
import Modal from '../../Components/Modal/index.jsx';
import { Container as C} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        alignItems:"center",
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height:"80vh",
        width: "100vw"
    }
}));

const Home = () => {
    const classes = useStyles();

    return(
        <C className={classes.container} color='prrmary' maxWidth='xl'>
            <Modal />
            <Button>Siguiente</Button>
        </C>
    )
}

export default Home;
