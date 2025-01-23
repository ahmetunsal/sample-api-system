import React from 'react'
import Nav from '../../components/Nav'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <div className=''>
      <Nav />
      <div className="flex flex-col h-[80vh] gap-10 items-center justify-center">
        <h1 className='text-9xl text-center'>B&A API <br /> Documents</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex px-16 py-2 rounded-xl bg-zinc-700">
            <pre>npm i bna@latest</pre>
          </div>
          <div className="flex">
            <NavLink to={"/docs"} className="text-blue-600 mt-5">
              Documents
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home