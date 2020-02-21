import React from 'react';

const Project = (props) => {
    return (
        <div>
           {console.log(props)}
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{props.completed}</p>
        </div>
    );
}

export default Project;
