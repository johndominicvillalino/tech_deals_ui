import React from 'react'

const FreeItems = ({ cartItems, allProducts }) => {

    const freeItems = cartItems.filter(e => 'free_item' in e)

    const items = freeItems.map(el => {
        const split = el.free_item.split(" ")
        const name = allProducts.find(ele => split[0] == ele.id)
        if (!name) {
            return []
        }
        split[0] = name.name
        return split.join(" ")
    })



    return (
        <div className='h-screen bg-gray-900 flex justify-center text-white'>
            <div className='container mx-auto'>
                <div className="overflow-x-auto relative">
                    <table className=" text-sm text-left text-gray-500 dark:text-gray-400 mt-10">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Free Items
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((e, i) => {
                                return <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {e}
                                    </td>
                                </tr>


                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FreeItems