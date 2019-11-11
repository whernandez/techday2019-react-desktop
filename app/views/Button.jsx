import React from "react";
import {Link} from 'react-router-dom';

function Button(props) {
    return (
        <Link to = {props.url} className = {props.class}>
            {props.title}
        </Link>
    )
}

export default Button;
