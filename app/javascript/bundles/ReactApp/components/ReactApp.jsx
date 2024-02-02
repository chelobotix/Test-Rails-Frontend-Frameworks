import React from 'react';
import style from './ReactApp.module.css';
import AppRouter from "../routes/AppRouter";
import '../style/main.css'

const ReactApp = (props) => {
    const {movies} = props
    return(
        <AppRouter movies={movies}/>
    )
}

export default ReactApp