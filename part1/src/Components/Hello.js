import React from 'react';
const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.power}</p>
        </div>
    )
}

export default Hello;