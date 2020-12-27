import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Context } from '../../utils/Context.jsx';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles ((theme) => ({
    container: {
        display:"flex",
        flexDirection: "column",
    }
}))

const ResultadosLeft = () => {

    const classes = useStyles()

    const { user, candidato } = useContext(Context)

    return (
        <div className={classes.container}>
            <h2>Resumen</h2>
            <h4>Datos</h4>
            <p>{`Entrevistador: ${user?.name} id: ${user?.numId}`}</p>
            <p>{`Candidato: ${candidato?.name} id: ${user?.email}`}</p>
        </div>
    )
}

export default ResultadosLeft;