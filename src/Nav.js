import React, {useState,useEffect}from 'react'
import './Nav.css'


function Nav() {
    const[show ,setShow] = useState(false)
    useEffect(() =>{
      window.addEventListener("scroll",() =>{
        if(window.scrolly >100){
            setShow(true)
        }else setShow(false)
      })
      return () =>{
        window.removeEventListener("scroll",() =>{

        })
      }
    }, [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
       <img className='nav__logo'
       src=''
       alt='Netflix logo'/>
    </div>
  )
}

export default Nav