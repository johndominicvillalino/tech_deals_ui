import React, { useEffect } from 'react'
import del from '../asset/delete.svg'
import { priceFormat } from '../helpers/functions'
import useDiscount from './hooks/useDiscount'
import FreeItems from './FreeItems'


const Cart = ({ setCurrentPage, cartItems, handleDelete,setCartItems, allProducts }) => {

    const cartInfo = useDiscount(cartItems)

    useEffect(() => {
        setCurrentPage('Cart')
        const cartItems_copy = cartItems 
        const filtered = cartItems_copy.filter(e => e.qty > 0)
        setCartItems([...filtered])

    }, [])

    const handleQtyChange = (action,payload) => {
        const items = cartItems
        const found = items.find(e => e.id == payload.id)
        switch (action) {
            case 'less':
                if(found.qty <= 0) {
                    handleDelete(payload.id)
                    return
                }
                found.qty -= 1;
                found.total = found.qty * found.price
                break;
            case 'add':
                found.qty += 1;
                found.total = found.qty * found.price
                break;
            default:
                break;
        }
        setCartItems([...items])

    }

   

    return (
        <div className='h-screen bg-gray-900 flex justify-center text-white'>
            <div className='container mx-auto'>

                <div className="overflow-x-auto relative">
                    <div className='text-white mt-10'>
                        <div> <span className={`text-3xl mr-2 `}>Total:</span><span className={`text-3xl mr-5 ${cartInfo.total != cartInfo.wDiscountTotal ? 'line-through text-red-300' : ''}`}>{priceFormat(cartInfo.total)}</span><span className={`text-3xl mr-5 ${cartInfo.total != cartInfo.wDiscountTotal ? 'text-green-600' : 'hidden'}`}>{priceFormat(cartInfo.wDiscountTotal)}</span>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-10">
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
                                    <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {e.name}
                                    </td>
                                    <td className="py-4 px-6">
                                        {e.sku}
                                    </td>
                                    <td className="py-4 px-6">
                                        <span onClick={() => handleQtyChange('less',e)} className='text-2xl p-1'>-</span><span className='mx-4'>{e.qty}</span><span onClick={() => handleQtyChange('add',e)} className='text-2xl p-1'>+</span>
                                    </td>
                                    <td className='py-4 px-6'>
                                        {priceFormat(e.price)}
                                    </td>
                                    
                                    <td className={`${e.total == e.newTotal ? '' : 'line-through text-red-300'} py-4 px-6`}>{priceFormat(e.total)}</td>
                                    <td className={`${e.total == e.newTotal ? '' : 'text-green-600'} py-4 px-6`}>{priceFormat(e.newTotal)}</td>
                                    <td>
                                        <img className='w-[20px] cursor-pointer fill-red-600 hover:scale-110 ease-in-out duration-300 ' src={del} onClick={() => handleDelete(e.id)} />
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <FreeItems allProducts={allProducts} cartItems={cartItems}></FreeItems>
            </div>
        </div>
    )
}

export default Cart