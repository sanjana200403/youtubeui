import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useRef } from 'react'
import Main from '../MainContent/Main'

const Home = () => {
  const navRef = useRef()
  const sideRef = useRef()
  const handleNav = ()=>{
    console.log(navRef)
      navRef.current.classList.toggle('active')
      sideRef.current.classList.toggle('large-container')
     
  }
  return (
    <>
  <Navbar handleNav={handleNav}/>
  <Sidebar navRef={navRef}/>
  <Main sideRef={sideRef} />
    </>
  )
}

export default Home
