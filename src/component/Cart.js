import React, { useEffect } from 'react'
import del from '../asset/delete.svg'
import { priceFormat } from '../helpers/functions'
import useDiscount from './hooks/useDiscount'


const Cart = ({ setCurrentPage, cartItems }) => {

    useDiscount(cartItems)

    useEffect(() => {
        setCurrentPage('Cart')
 
    }, [])

   


    return (
        <div className='h-screen bg-gray-900 flex justify-center text-white'>
            <div className='container mx-auto'>

                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-20">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Item Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Sku
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Qty
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Total
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Total w/discount
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(e => {
                                return (<tr key={e.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {e.name}
                                    </th>
                                    <td className="py-4 px-6">
                                        {e.sku}
                                    </td>
                                    <td className="py-4 px-6">
                                        {e.qty}
                                    </td>
                                    <td>
                                        {priceFormat(e.price)}
                                    </td>
                                    <td>{priceFormat(e.price * e.qty)}</td>
                                    <td></td>
                                    <td>
                                        <img className='w-[20px] cursor-pointer fill-red-600 hover:scale-110 ease-in-out duration-300 ' src={del} />
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart