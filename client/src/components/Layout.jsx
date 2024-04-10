import React from 'react'
import PersonalDetails from './aside/PersonalDetails'
import Links from './aside/Links'

const Layout = ({children}) => {
  return (
    <main className=' grid grid-cols-10 grid-rows-1 min-h-screen'>
        <aside className=' bg-slate-100 border border-r-2 col-span-2'>
            <PersonalDetails />
            <Links />
        </aside>
        <main className=' bg-slate-100 col-span-8 px-4 pt-4'>
            <section>
                <h1 className=' text-xl font-semibold text-slate-500'>Welcome to Inventory Management</h1>
            </section>
            <section className=' grid grid-cols-4 gap-8 mt-8'>
                <article className=' col-span-1 h-32 bg-purple-500 rounded-lg'></article>
                <article className=' col-span-1 h-32 bg-blue-500 rounded-lg'></article>
                <article className=' col-span-1 h-32 bg-green-500 rounded-lg'></article>
                <article className=' col-span-1 h-32 bg-yellow-500 rounded-lg'></article>
            </section>
            {children}
        </main>
    </main>
  )
}

export default Layout
