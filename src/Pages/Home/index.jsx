import React, { useState, useContext } from 'react';
import Modal1 from '../../Components/Modal1/index.jsx';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card1 from '../../Components/Card1/index.jsx';
import { Context } from '../../utils/Context.jsx';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles ((theme) => ({
    container: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "80vh",
        width: "100vw"
    }
}));

const Home = () => {

    const history = useHistory()
    
    const classes = useStyles();
    
    const { user } = useContext(Context)

    const handleOnClick = () => history.push('/candidato')

    return(
        <Container className={classes.container} color='primary' maxWidth='xl'>
            { user !== null && <Card1 user={user} />}
            <Modal1 />
            <Button disabled={user === null ? true : false} onClick={handleOnClick}>Siguiente</Button>
        </Container>
    )
}

export default Home;
