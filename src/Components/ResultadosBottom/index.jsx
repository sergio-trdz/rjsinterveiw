import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Context } from '../../utils/Context.jsx';
import { useHistory } from 'react-router-dom';

const ResultadosBottom = () => {

    const { user, questions, candidato, option } = useContext(Context)

    return (
        <>
            <p>ResultadosBottom</p>
        </>
    )
}

export default ResultadosBottom;