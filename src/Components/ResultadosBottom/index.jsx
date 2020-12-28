import React, { useContext, useEffect } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Context } from '../../utils/Context.jsx';
import { useHistory } from 'react-router-dom';

const ResultadosBottomLeft = () => {


    return (
        <>
            <TextareaAutosize 
                aria-label="empty textarea" 
                placeholder="Agrega un comentario"
                rowsMin={3} 
            />
        </>
    )
}

export default ResultadosBottomLeft;