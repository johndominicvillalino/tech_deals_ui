import axios from "axios"
import { useEffect, useState } from "react"
import { baseUrl } from "../helpers/constants"
import del from '../asset/delete.svg'
import { Link } from "react-router-dom"


const Promotions = ({ setCurrentPage, setCartItems, setProducts, products, cartItems }) => {

    const [promos, setPromos] = useState([])
    useEffect(() => {

        setCurrentPage('Promotions')
        axios.get(`${baseUrl}/promotions`)
            .then(e => {
                setPromos(e.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

  


    const handleDelete = e => {

        const { id, product_id } = e

        axios.delete(`${baseUrl}/promotions`, { params: { id } })
            .then(res => {
                const filtered = promos.filter(el => el.id != id)
                setPromos([...filtered])
                const items = products
                const itemInCart = cartItems
                const foundInItem = products.find(el => el.id == product_id)
                const foundInCart = itemInCart.find(ele => ele.id == product_id)
                if (foundInItem) {
                    delete foundInItem.promotion
                    setProducts([...items])
                }
                console.log(foundInCart)
                if (foundInCart) {
                    delete foundInCart.promotion
                    foundInCart.free_item = ''
                    setCartItems([...itemInCart])
                }
            })
            .catch(err => console.log(err))

    }


    return (
        <div className='h-screen bg-gray-900 flex justify-center text-white'>
            <div className='container mx-auto'>

                <div className="overflow-x-auto relative">
                    <Link to='/promotions/create'>
                        <button className="mt-10 border border-white p-2 rounded-md bg-blue-700 cursor-pointer hover:bg-blue-800">Create a Promotion
                        </button>
                    </Link>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-10">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Promo Description
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    SKU
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Type
                                </th>
                               
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {promos.map(e => {
                                return (
                                    <tr key={e.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {e.description}
                                        </th>
                                        <td className="py-4 px-6">
                                            {`${e.product.sku} - ${e.product.name}`}
                                        </td>
                                        <td className="py-4 px-6">
                                            {e.promo_type}
                                        </td>
                                     
                                        <td>
                                            <img onClick={() => handleDelete(e)} className='w-[20px] cursor-pointer fill-red-600 hover:scale-110 ease-in-out duration-300 ' src={del} />
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

export default Promotions