import React from 'react';

const ValidationComponent = (props) => {
    if (props.word.length < 5){
        return (
            <p>"Text too short hoe"</p>
            )
    } else {
        return (
            <p>"Text long enough bitchass"</p>
            )
    }
}

export default ValidationComponent; 