import axios from 'axios'
import { useEffect, useState } from 'react'
import { priceFormat } from '../helpers/functions'

const Product = ({setCartItems, setCurrentPage,products, setProduct }) => {

    useEffect(() => {

        setCurrentPage('Tech Deals')

  
    },[])

    const handleQtyChange = e => {
        const {value,id} = e.target
        if(value < 0) return;
        const productData = products
        const found = productData.find(el => el.id == id)
        found.qty = value
        setProduct([...productData])
    }

    const handleSendCart = e => { 

        const {id} = e
        setCartItems(prev => {
            const prevData = prev
            const found = prevData.find(el => el.id == id)
            if(found) {
                found.qty = e.qty
                return [...prevData]
            } else {
                return [...prev,e]
            }
        })
    }


    return (
        <section className="bg-white dark:bg-gray-900 h-full">
            <div className="container px-6 py-8 mx-auto">
                <div className="lg:flex lg:-mx-2">
                    <div className="mt-6 lg:mt-0 lg:px-2 ">
                        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            {products.map(e => {
                                return (
                                    <div key={e.id} className="flex flex-col items-center justify-center w-full max-w-[300px] mx-auto">
                                        <img className="object-cover w-full rounded-md h-72 xl:h-80" src={require('../asset/default.jpeg')} alt="T-Shirt" />
                                        <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{e.name}</h4>
                                        <p className="text-blue-500">{priceFormat(e.price)}</p>

                                        <div className='flex justify-between w-full'>
                                            <button onClick={() => handleSendCart(e)} className={`flex items-center justify-center  px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ${e.qty == 0 ? 'text-gray-700 pointer-events-none':''}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                                </svg>
                                                <p>Add</p>
                                            </button>
                                            <div className='flex h-full gap-2 items-end pb-2'>
                                                <label className='text-white'>Qty</label>
                                                <input type="number" className='w-[60px] rounded-md text-center text-sm py-1 px-2 text-white capitalize transition-colors duration-200 transform bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                                                value={e.qty}
                                                id={e.id}
                                                onChange={handleQtyChange}
                                                ></input>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product