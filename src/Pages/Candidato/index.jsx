import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import Modal2 from '../../Components/Modal2/index.jsx';
import Modal3 from '../../Components/Modal3/index.jsx';
import Card2 from '../../Components/Card2/index.jsx';
import { Context } from '../../utils/Context.jsx';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles ((theme) => ({
    container: {
        alignItems: "center", 
        display:"grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        justifyItems: "center",
        height: "80vh",
        width: "100vw"
    },
    
    candidato: {
        alignItems: "center", 
        display:"flex",
        justifyItems: "center",
        flexDirection: "column"
    }
}))

const Candidato = () => {

    const history = useHistory()

    const classes = useStyles();

    const { candidato, option } = useContext(Context)

    return (
        <div>
            <div  className={classes.candidato}>
                <h1>Candidato</h1>
            </div>
        <Container className={classes.container}>
            { candidato !== null && <Card2 candidato={candidato}/> }
            <Modal2 />
            <Modal3 />
            <Button onClick={() => history.push('/')}>Atras</Button>
            <Button onClick={() => history.push('/preguntas')} disabled={candidato && option ? false: true}>Siguiente</Button>
        </Container>
        </div>
    )
}

export default Candidato;