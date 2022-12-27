import React from 'react'
import { Outlet } from 'react-router'
import { useEffect } from 'react'
function About() {
  useEffect(() => {
    checkInteger()

  }, [])



  const checkInteger = () => {
   
  }

  return (
    <div><Outlet /></div>
  )
}

export default About