import React from 'react'

import Navbar from './components/Navbar'

import Header from './components/Header'
import Amazing from './components/Amazing'
import Projects from "./components/Projects"
import Group from './components/Group'
import Footer from './components/Footer'
import User from "./components/User"
import Collection from "./components/Collection"
import Feaatured from "./components/Featured"
import FeaturedFinal from './components/FeaturedFinal'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Amazing/>
   
    <User/>
    <FeaturedFinal/>
    <Group/>
    <Projects/>
   
    <Footer/>
    
    </>
  )
}

export default Home