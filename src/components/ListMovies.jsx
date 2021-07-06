import React from "react";

const ListMovies = ({peliculas}) => {
// console.log(props)
// const {peliculas}=props
//     console.log(peliculas)
  return (
     
    <ul>
      {/* Las keys ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados. Las keys deben ser dadas a los elementos dentro del array para darle a los elementos una identidad estable */}
      {peliculas.map((movie) => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </ul>
  );
};

export default ListMovies;
