import React from 'react'

const FreeItems = ({cartItems,allProducts}) => {

    const freeItems = cartItems.filter(e => 'promotion' in e)
    const items = freeItems.map(el => {
        const itemCopy = allProducts
        const itemArr = el.free_item.split(" ")
        const findName = itemCopy.find(ele => ele.id == itemArr[0])
        itemArr[0] = findName.name
        return itemArr.join(" ")
       
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
                            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                {items.map(e => {
                               return <th className="py-4 px-6">
                                    {e}
                                </th>
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FreeItems