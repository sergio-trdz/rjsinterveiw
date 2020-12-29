import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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