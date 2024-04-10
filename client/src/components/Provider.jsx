import React, { useEffect, useState } from 'react'

const Provider = () => {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    const getProviders = async () => {
      const res = await fetch('127.0.0.1:8000/provider')
      // const data = await res.json()
      console.log(res)

      // setProviders(data.data)
    }

    getProviders()
  }, [])
  return (
    <section>
      <section className=' flex justify-between mt-4'>
          <h2 className=' text-lg font-semibold text-slate-400'>Providers</h2>
          <button className=' bg-green-300 py-2 px-4 rounded-xl font-bold text-slate-700'>Create</button>
      </section>
      <section>
        <table class="table-auto text-slate-500 border-separate border-spacing-2 border w-full border-slate-200">
            <thead>
                <tr className=''>
                    <th className='border border-slate-400 px-2 bg-slate-300 rounded-md'>Id</th>
                    <th className='border border-slate-400 px-2 bg-slate-300 rounded-md'>Name</th>
                    <th className='border border-slate-400 px-2 bg-slate-300 rounded-md'>Email</th>
                    <th className='border border-slate-400 px-2 bg-slate-300 rounded-md'>Address</th>
                </tr>
            </thead>
            <tbody>
                  {
                    providers.map((item, index) => (
                      <tr key={index} className=' cursor-pointer'>
                          <td className='border border-slate-200 px-2 rounded-md'>{item.id}</td>
                          <td className='border border-slate-200 px-2 rounded-md'>{item.name}</td>
                          <td className='border border-slate-200 px-2 rounded-md'>{item.email}</td>
                          <td className='border border-slate-200 px-2 rounded-md'>{item.address}</td>
                      </tr>
                    ))
                  }
            </tbody>
        </table>
        </section>
    </section>
  )
}

export default Provider