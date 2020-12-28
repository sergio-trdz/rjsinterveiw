import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ResultadosLeft from '../../Components/ResultadosLeft/index.jsx';
import ResultadosRight from '../../Components/ResultadosRight/index.jsx';
import ResultadosBottomLeft from '../../Components/ResultadosBottom/index.jsx';
import ResultadosBottomRight from '../../Components/ResultadosBottomRight/index.jsx';

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
    },
    containerBottom: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: "100%",
        marginTop: "200px"
    }
}))


const Resultados = () => {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <h2>Resumen</h2>
            <div className={classes.subContainer}>
                <ResultadosLeft />
                <ResultadosRight />
            </div>
            <div className={classes.containerBottom}>
                <ResultadosBottomLeft />
                <ResultadosBottomRight />
            </div>
        </div>
    )
}

export default Resultados;