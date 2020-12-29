import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../../utils/Context.jsx';

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
            <h4>Datos</h4>
            <p>{`Entrevistador: ${user?.name}`}</p>
            <p>{`Id: ${user?.numId}`}</p>
            <p>{`Candidato: ${candidato?.name}`}</p>
            <p>{`Correo: ${user?.email}`}</p>
            {/* <h4>Datos</h4>
            <h5>Entrevistador</h5>
            <p>Nombre completo:</p>
            <p>{`${user?.name}`}</p>
            <p>Id de usuario:</p>
            <p>{`${user?.numId}`}</p>
            <h5>Candidato</h5>
            <p>Nombre completo:</p>
            <p>{`${candidato?.name}`}</p>
            <p>Correo electronico:</p>
            <p>{`${candidato?.email}`}</p> */}
        </div>
    )
}

export default ResultadosLeft;