export const baseUrl = 'https://tranquil-bastion-84851.herokuapp.com'
// export const baseUrl = 'http://localhost:5000'


export const discountFormAttr =  {
    promo_type: '',
    product_id: '',
    description: '',
    percent_discount: '',
    min_value: '',
    min_quantity: '',
    trigger: '',
    specific_discount_amount: '',
    free_item: '',
    min_value_cart:'',
    drop_to:''
}




export const MINIMIN_QUANTITY_PURCHASE = 'Minimum Quantity Purchase'
export const  MIN_QUANTITY = 'min_quantity'

export const MININUM_PURCHASE_VALUE = 'Minimum Purchase Value'
export const MIN_VALUE = 'min_value'

export const PERCENT_DISCOUNT = 'Percent Discount'
export const SPECIFIC_AMOUNT_DISCOUNT = 'Specific Amount discount'
export const FREE_ITEM_DISCOUNT = 'Free Item Discount'
export const PRICE_DROP = 'Price Drop'


export  function validatePromoForm (e) {    
    const {trigger,promo_type,product_id, description,percent_discount,free_item,specific_discount_amount,min_value,min_quantity} = e
    if(!promo_type) {
        return 'Specify a Discount Type'
    } 

   
    if(!product_id) {
        return 'Product Missing'
    }

    if(!description) {
        return 'Add a description'
    }

    switch (promo_type) {
        case PERCENT_DISCOUNT:
            if(!percent_discount) {
                return 'Specify Percent Discount'
            }
            break;
        case SPECIFIC_AMOUNT_DISCOUNT:
            if(!specific_discount_amount) {
                return 'Specify Discount Amount'
            }
            break;
        case FREE_ITEM_DISCOUNT:
            if(!free_item) {
                return 'Specify Free Item'
            }
            break;
    
        default:
            break;
    }

   

    if(!trigger) {
        return 'Specify a promotion trigger'
    }

  
    switch (trigger) {
        case MINIMIN_QUANTITY_PURCHASE:
            if(!min_quantity) {
                return 'Add Minimum Quantity'
            }
            break;
        case MININUM_PURCHASE_VALUE:
            if(!min_value) {
                return 'Add Minimum Purchase Value'
            }
            break;
        default:
            break;
    }

    return false

}
