import PropTypes from 'prop-types';
import React, {useState} from 'react';
import style from './HelloWorld.module.css';
import Test from "./Test";
import About from "./About";
import {BrowserRouter, Routes, Route, } from 'react-router-dom';

const HelloWorld = (props) => {
    const [name, setName] = useState(props.name);
    const [counter, setCounter] = useState(1);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<About/>}/>
                </Routes>
            <div>
                <h3>Hello, {name}!</h3>
                <p>{counter}</p>
                <button onClick={() => setCounter(counter + 1)}>Click</button>
                <hr/>
                <form>
                    <label className={style.bright} htmlFor="name">
                        Say hello to:
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                </form>

            </div>
            </BrowserRouter>
        </>
    );
};

HelloWorld.propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
