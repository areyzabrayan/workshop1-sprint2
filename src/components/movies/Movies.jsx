import React from 'react'
import { listPeliculas } from '../../data/data'
import './Movies.scss'
import useScreenSize from '../screen/Screen';

const Movies = () => {
    const movies = listPeliculas;
    const { width, height } = useScreenSize();
  return (
    <>
        {width > 500 &&
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
                                <h1 className='movies__parrafo'>{movie.name}</h1>
                            </div>
                            
                        ))
                    }
                    <button className='btn__responsive'>SE ALL</button>
                </div>  
            </section>
        }
        {width < 500 &&
            <section className='movies'> 
                <div className='movies__container--uno'> 
                    <h1>OUR CREATIONS</h1>
                    <button>SE ALL</button>
                </div>
                <div className='movies__container--dos'> 
                    {
                        movies.map((movie, index) => (
                            <div className='movies__div'> 
                                <img className='movie__imagen' key={index} src={movie.image2} alt="" />
                                <p className='movies__parrafo'>{movie.name}</p>
                            </div>
                        ))
                    }
                    <button className='btn__responsive'>SE ALL</button>
                </div>
            </section>
        }
    </>
  )
}
export default Movies

