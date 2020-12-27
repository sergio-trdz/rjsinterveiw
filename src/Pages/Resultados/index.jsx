import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Context } from '../../utils/Context.jsx';
import ResultadosLeft from '../../Components/ResultadosLeft/index.jsx';
import ResultadosRight from '../../Components/ResultadosRight/index.jsx';
import ResultadosBottom from '../../Components/ResultadosBottom/index.jsx';

const useStyles = makeStyles ((theme) => ({
    container: {
        alignItems: "center", 
        display:"flex",
        justifyItems: "center",
        flexDirection: "column",
        height: "80vh",
        width: "100vw"
    },

    subContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: "100%"
    }
}))


const Resultados = () => {

    const classes = useStyles()

    const { user, questions, candidato, option } = useContext(Context)

    return (
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <ResultadosLeft />
                <ResultadosRight />
            </div>
            <ResultadosBottom />
        </div>
    )
}

export default Resultados;