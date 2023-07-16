import React from 'react'
import logo from '../../assets/logo.svg'
import { linkIconos, listLinks } from '../../data/data'
import './footer.scss'


function Footer() {
    const iconos = linkIconos;
    const links = listLinks

  return (
    <div className='footer'>
        <article className='footer__sectionA'>
            <figure className='footer__figure'>
                <img className='footer__img' src={logo} alt="logo" />
            </figure>
            <nav className='footer__iconos'>
                {
                    iconos.map((icono,index)=>(
                        <img className='footer__icono' key={index} src={icono.image} alt="icono" />
                    ))
                }
            </nav>
        </article>

        <article className='footer__sectionB'>
            <nav className='footer__links'>
            {
                links.map((titulo, index)=>(
                    <span className='footer__titulos' key={index}>{titulo.title}</span>
                ))
            }

            </nav>
            <span className='footer__span'>© 2021 Loopstudios. All rights reserved.</span>
        </article>
        
    </div>
  )
}

export default Footer
