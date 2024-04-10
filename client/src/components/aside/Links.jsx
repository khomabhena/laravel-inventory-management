import React from 'react'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <>
    <nav>
        <button className=' bg-green-300 w-full mt-4 mx-2 rounded-md py-2 font-semibold text-green-800'>Create new Order</button>
        <Link to={'/provider'}>
            <Buttons>Provider</Buttons>
        </Link>
        <Link to={'/category'}>
            <Buttons>Category</Buttons>
        </Link>
    </nav>
    </>
  )
}

export default Links
