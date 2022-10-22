import axios from "axios"
import { useEffect, useState } from "react"
import { baseUrl } from "../helpers/constants"
import del from '../asset/delete.svg'


const Promotions = ({ setCurrentPage }) => {

    const [promos, setPromos] = useState([])
    useEffect(() => {

        setCurrentPage('Promotions')
        axios.get(`${baseUrl}/promotions`)
            .then(e => {
                console.log('data')
                setPromos(e.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = (e) => {
        const { id, checked } = e.target
        const promotion = promos
        const found = promotion.find(el => el.id == id)
        found.is_active = checked
        setPromos([...promotion])

    }


    return (
        <div className='h-screen bg-gray-900 flex justify-center text-white'>
            <div className='container mx-auto'>

                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-20">
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
                                <th scope="col" className="py-3 px-6">
                                    Status
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
                                            {e.id}
                                        </td>
                                        <td className="py-4 px-6">
                                            {e.promo_type}
                                        </td>
                                        <td className="py-4 px-6">
                                            <input
                                                id={e.id}
                                                type='checkbox'
                                                checked={e.is_active}
                                                onChange={handleChange}
                                            ></input>
                                        </td>
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

export default Promotions