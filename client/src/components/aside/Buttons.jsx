import React from 'react'

const Buttons = ({children}) => {
  return (
    <section className=' text-slate-500 font-semibold hover:border hover:border-green-300 rounded-md mx-2 mt-4 px-4 py-2'>
      {children}
    </section>
  )
}

export default Buttons
