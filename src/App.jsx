

import React from 'react'
import ListMovies from './components/ListMovies'

import movies from './data/webflix'

const App = () => {
//Declaración de variables
// console.log(movies)

//Funciones


    return (
        <div>
            <h1>Bienvenido a Webflix</h1>
            <hr />
            <ListMovies peliculas={movies}/>
        </div>
    )
}

export default App
