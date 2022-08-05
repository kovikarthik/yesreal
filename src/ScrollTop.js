import React,{useEffect} from 'react'

export default function ScrollTop() {
    useEffect(() => {
      const top = document.getElementById('top')
      top.scrollIntoView({ behavior: 'smooth' })
        // window.scrollTo(0, 0);
      }, []);
  return (
    null
  )
}
