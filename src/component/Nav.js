import React from 'react'
import { Link } from 'react-router-dom'
import add from '../asset/add-item.svg'

const Nav = ({ currentPage, setOpen, cartItems }) => {
  return (
    <>
      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" >
                {currentPage}
              </a>

              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><Link className="hover:text-gray-200" to='/'>Products</Link></li>
                <li><Link className="hover:text-gray-200" to="/promotions">Promotions</Link></li>
              </ul>

              <button className='ml-auto md:ml-0' onClick={() => setOpen(true)} to='/add-item'>
                <div className='flex w-[150px] gap-2'>
                  <img className='w-[25px] ml-auto md:ml-0' src={add}></img>
                  <span className='hidden sm:block'>Add Product</span>
                </div>
              </button>

              <div className="hidden xl:flex items-center space-x-5 items-center">
                <Link className="flex items-center hover:text-gray-200" to="/cart">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {cartItems.length > 0 && <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500" />
                  </span>
                  }
                </Link>
              </div>
            </div>
            
            <Link className="xl:hidden flex mr-6 items-center" to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItems.length > 0 && <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
              }
            </Link>



          </nav>

          <ul className="text-white w-full flex items-center justify-center text-2xl md:hidden flex-wrap gap-10 ">
                <li><Link className="hover:text-gray-200" to='/'>Products</Link></li>
                <li><Link className="hover:text-gray-200" to="/promotions">Promotions</Link></li>
          </ul>

        </section>
      </div>

    </>
  )
}

export default Nav

