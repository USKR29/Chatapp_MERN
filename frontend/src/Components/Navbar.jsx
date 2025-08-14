import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom'
import useLogout from '../hooks/useLogout'

const Navbar = () => {

    const {logout} = useLogout()
    const [open,setOpen]=useState(false)

    const {user}=useContext(AuthContext)

    const handleLogout=()=>{

        logout();

    }

  return (
    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          ChatApp
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">

        {user && (<div className="hidden md:relative md:block">
          <button
            type="button"
            onClick={()=>setOpen((prev)=>!prev)}
            className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
          >
            <span className="sr-only">Toggle dashboard menu</span>

            <div className='rounded-full p-2'>{user.profile}</div>
          </button>
            
            {open && <div
            className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu" >
            <div className="p-2">
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                My profile
              </a>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                 settings
              </a>
            </div>

            <div className="p-2">
             
                <button
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                  role="menuitem"
                  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>

                  Logout
                </button>
              
            </div>
          </div>}
          
        </div>)}

        <div className="block md:hidden">
          <button
            className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Navbar