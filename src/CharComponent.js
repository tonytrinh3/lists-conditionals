import React from 'react';

const style = {
    display:"inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
};

const CharComponent = (props) => {

    return (
        <div>
           
            <p style = {style}>{props.letter}</p>
        </div>
    )
}
export default CharComponent 