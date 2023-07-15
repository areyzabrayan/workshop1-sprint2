import React from 'react'
import { listPeliculas } from '../../data/data'
import './Movies.scss'

const Movies = () => {
    const movies = listPeliculas;
  return (
    <section className='movies'> 
        <div className='movies__container--uno'> 
            <h1>OUR CREATIONS</h1>
            <button>SE ALL</button>
        </div>
        <div className='movies__container--dos'> 
            {
                movies.map((movie, index) => (
                    <div className='movies__div'> 
                        <img className='movie__imagen' key={index} src={movie.image} alt="" />
                        <p className='movies__parrafo'>{movie.name}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Movies

