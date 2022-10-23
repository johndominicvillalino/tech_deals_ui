import { Link } from "react-router-dom"
import { useState } from "react"

import FreeItemDiscount from "./form/FreeItemDiscount"
import { discountFormAttr } from "../helpers/constants"

const AddPromotion = ({ products,setProducts }) => {

    const [formData, setFormData] = useState(discountFormAttr)

    const [promoType, setPromoType] = useState('')

    const handlePromoTypeChange = e => {
        const { value } = e.target
        setPromoType(value)
        setFormData(prev => {
            return {
                ...prev,
                promo_type: value
            }
        })
    }

    return (
        <div className='h-screen bg-gray-900 flex justify-center text-white'>
            <div className='container mx-auto'>

                <div className="overflow-x-auto relative">
                    <Link to='/promotions'>
                        <button className="mt-10 border border-white p-2 rounded-md bg-blue-700 cursor-pointer hover:bg-blue-800">Back
                        </button>
                    </Link>
                    <div className="mt-5 flex gap-2 items-center">

                        <label>Promo Type</label>
                        <select onChange={handlePromoTypeChange} name="promo_type" id="promo_type" className=" text-black py-2 px-5 rounded-md">
                            <option hidden value="">Select a promo Type</option>
                            <option value="Specific Amount discount">Specific Amount discount</option>
                            <option value="Percent Discount">Percent Discount</option>
                            <option value="Free Item Discount">Free Item Discount</option>
                        </select>


                    </div>

                    <div className="flex justify-center">
                    <FreeItemDiscount setProducts={setProducts} promoType={promoType} setFormData={setFormData} formData={formData} products={products}></FreeItemDiscount>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPromotion
