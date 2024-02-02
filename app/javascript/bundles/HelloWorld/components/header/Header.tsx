import React, {useState} from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <nav>
                <ul>
                    <Link className="m-1" to={'home'}>Home</Link>
                    <Link className="m-1" to={'about'}>About</Link>
                </ul>
            </nav>
        </>
    )
}

export default Header