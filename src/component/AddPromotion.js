import { Link } from "react-router-dom"
import { useState } from "react"

import FreeItemDiscount from "./form/FreeItemDiscount"
import { discountFormAttr, FREE_ITEM_DISCOUNT , SPECIFIC_AMOUNT_DISCOUNT,PRICE_DROP} from "../helpers/constants"



const AddPromotion = ({ products,setProducts }) => {

    const [formData, setFormData] = useState(discountFormAttr)

    const [error,setError] = useState('')

    const [promoType, setPromoType] = useState('')
    const [showError,setShowError] = useState(false)

    const handlePromoTypeChange = e => {
        setShowError(false)
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
        <div className='bg-gray-900 flex justify-center text-white md:h-screen h-[800px]'>
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
                            <option value={SPECIFIC_AMOUNT_DISCOUNT}>Specific Amount discount</option>
                            <option value={FREE_ITEM_DISCOUNT}>Free Item Discount</option>
                            <option value={PRICE_DROP}>Price Drop</option>
                        </select>
                    </div>

                    <div className="flex justify-center">
                    <FreeItemDiscount setShowError={setShowError} showError={showError} error={error} setError={setError} setProducts={setProducts} promoType={promoType} setFormData={setFormData} formData={formData} products={products}></FreeItemDiscount>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPromotion
