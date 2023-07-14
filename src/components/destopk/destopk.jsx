import React from 'react'
import { listPeliculas } from '../../data/data'

const Destopk = () => {
  const imagenPeliculas= listPeliculas
  return (
    <div>
    
      <figure>
        {
          imagenPeliculas.map((pelicula, index)=>(
            <img key={index} src={pelicula.image} alt="img" />
          ))
        }     
    </figure>

   
  </div>
  )
}

export default Destopk