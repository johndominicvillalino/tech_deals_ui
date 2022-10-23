import React from 'react'

const DiscountInput = ({ promoType, handleChange, products, formData }) => {

    let inputDiscount;


    switch (promoType) {
        case 'Free Item Discount':
            inputDiscount = <><label>Free Item</label>
                <select name="free_item" onChange={handleChange} id="free_item" className="text-black py-2 px-5 rounded-md">
                    <option key={0} value='' defaultValue hidden>Select a Product</option>
                    {products.map(e => {
                        if (e.id != formData.product_id) {
                            return (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            )
                        }
                    })}
                </select>
            </>
            break;
        case 'Percent Discount':
            inputDiscount = <><label>Percent Discount</label>
            <input onChange={handleChange} name="percent_discount" id="percent_discount" className=" text-black py-2 px-5 rounded-md"
                type='number'
                placeholder="1% - 100%"
            /></>
            break;
        case 'Specific Amount discount':
            inputDiscount = <>   <label>Specific Discount Amount</label>
            <input onChange={handleChange} name="specific_discount_amount" id="specific_discount_amount" className=" text-black py-2 px-5 rounded-md"
                type='number'
                placeholder="0.00"
            /></>
            break;

        default:
            break;
    }
    return (
        <>
            {inputDiscount}
        </>
    )
}

export default DiscountInput