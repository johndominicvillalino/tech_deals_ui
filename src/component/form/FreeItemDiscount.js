
import MinInput from "./ui/MinInput"
import DiscountInput from "./ui/DiscountInput"
import axios from "axios"
import { baseUrl } from "../../helpers/constants"
import { MINIMIN_QUANTITY_PURCHASE, MININUM_PURCHASE_VALUE } from "../../helpers/constants"
import { validatePromoForm } from "../../helpers/constants"
import { useNavigate } from "react-router-dom"

const FreeItemDiscount = ({ products,setFormData,formData,promoType,setProducts,setError,error,showError,setShowError }) => {

    const navigate = useNavigate()

    const handleChange = e => {
        setShowError(false)
        const { value, name } = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const validate = validatePromoForm(formData)
        if(validate) {
            setError(validate)
            setShowError(true)
            return
        }
         axios.post(`${baseUrl}/promotions`,formData)
        .then(e => {
            const data = products
            const found = data.find(el => el.id == formData.product_id)
            found.promotion = formData
            setProducts([...data])
            navigate('/promotions')
        })
        .catch(err => console.log(err))
    }

    
    return (
        <form className="flex md:w-1/2 flex-col mt-20 gap-5 w-full px-5 md:px-0">
            {showError &&<div className="rounded-md bg-white text-center text-red-600 py-2 mb-10"><span>{`${error}!`}</span></div>}
            <div className="flex gap-2 items-center flex-wrap ">
                <label>Product Name</label>
                <select name="product_id" onChange={handleChange} id="product_id" className="text-black py-2 px-5 rounded-md md:w-auto w-full">
                    <option key={0} value='' defaultValue hidden>Select a Product</option>
                    {products.map(e => {
                        if('promotion' in e) return
                        return (
                            <option key={e.id} value={e.id}>{e.name}</option>
                        )
                    
                    })}
                </select>
            </div>

            <div className="flex gap-2 w-full md:flex-nowrap flex-wrap">
                <div className="flex flex-col md:w-1/2 gap-2 w-full">
                    <label>Description</label>
                    <input name="description" onChange={handleChange} id="description" className=" text-black py-2 px-5 rounded-md"
                        placeholder="Ex. Buy 5 Take 1 for free"
                    >
                    </input>
                </div>
                <div className="flex flex-col md:w-1/2 gap-2 w-full gap-2">
                   <DiscountInput formData={formData} promoType={promoType} products={products} handleChange={handleChange}></DiscountInput>
                </div>
            </div>
            <div className="flex gap-2 w-full flex-wrap md:flex-nowrap">
                <div className="md:w-1/2 w-full flex flex-col gap-2">
                    <label>
                        Promotion Trigger
                    </label>
                    <select onChange={handleChange} name="trigger" id="promo_type" className=" text-black py-2 px-5 rounded-md">
                        <option hidden value="">Select a promo Type</option>
                        <option value={MININUM_PURCHASE_VALUE}>Minimum Purchase Value</option>
                        <option value={MINIMIN_QUANTITY_PURCHASE}>Minimum Quantity Purchase</option>
                    </select>
                </div>
                <MinInput handleChange={handleChange} formData={formData}></MinInput>
            </div>
            <div className="flex">
                <button className="border border-white px-5 py-2 rounded-md bg-blue-700 hover:bg-blue-800"
                    type='submit'
                    onClick={handleSubmit}
                >Submit</button>
            </div>
        </form >
    )
}

export default FreeItemDiscount