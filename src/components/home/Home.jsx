import React from 'react'
import Header from '../header/Header'
// import Destopk from '../destopk/destopk'
import './home.scss'
import Footer from '../footer/footer'
import Movies from '../movies/Movies'


function Home() {
  return (
    <>
    <Header />
    {/* <Destopk /> */}
    <Movies />
    <Footer />
    </>
  )
}



export default Home