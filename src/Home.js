import React from 'react'

import Navbar from './components/Navbar'

import Header from './components/Header'
import Amazing from './components/Amazing'
import Nft from "./components/Nft"
import Group from './components/Group'
import Footer from './components/Footer'
import User from "./components/User"
import Collection from "./components/Collection"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Amazing/>
    <Group/>
    <Nft/>
    <User/>
    <Footer/>
    </>
  )
}

export default Home