import React from 'react'
import { PRICE_DROP,SPECIFIC_AMOUNT_DISCOUNT,FREE_ITEM_DISCOUNT } from '../../../helpers/constants';

const DiscountInput = ({ promoType, handleChange, products, formData }) => {

    let inputDiscount;


    switch (promoType) {
        case FREE_ITEM_DISCOUNT:
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
        case SPECIFIC_AMOUNT_DISCOUNT:
            inputDiscount = <>   <label>Specific Discount Amount</label>
            <input onChange={handleChange} name="specific_discount_amount" id="specific_discount_amount" className=" text-black py-2 px-5 rounded-md"
                type='number'
                placeholder="0.00"
            /></>
            break;
        case PRICE_DROP:
            inputDiscount = <>   <label>New Price</label>
            <input onChange={handleChange} name="drop_to" id="drop_to" className=" text-black py-2 px-5 rounded-md"
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