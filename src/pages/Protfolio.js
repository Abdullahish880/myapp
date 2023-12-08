import React from 'react'
import Section from '../components/Sidebar/Section'
import Main from '../components/Main'
import { Link } from 'react-router-dom'

const Protfolio = () => {
  return (
    <div>
     <Link to={'/dashboard'}><h1>this is my protfolio</h1></Link>
    </div>
  )
}

export default Protfolio
