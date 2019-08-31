import React from 'react';
const style = {
    border: "1px solid black",
    margin: "20px"
}
const UserOutput = props => {
    return(
        <div style={style}
            className="output">
            <h3>{props.uName}</h3>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </div>
    )
}

export default UserOutput