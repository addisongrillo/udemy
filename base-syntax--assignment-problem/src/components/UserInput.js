import React from 'react';

const UserInput = props => {
    return(
        <div>
            <h3>UserName</h3>
            <input onChange={props.handleChange} value={props.uName}></input>
        </div>
    )
}

export default UserInput