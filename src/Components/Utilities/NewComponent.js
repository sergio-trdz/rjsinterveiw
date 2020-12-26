import React from 'react';

const NewComponent = ({nombre, ciudad, Random}) => {
    return (
        <div>
            <p>{`${nombre}   ${ciudad}`}</p>
            <Random/>
        </div>
    )
}

export default NewComponent;