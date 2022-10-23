import { percentDiscount } from "../../helpers/functions";



function useDiscount(items) {


    const cartInfo = items
    const cartTotal = items.map(e => e.total).reduce((prev,curr) => prev + curr,0)
    cartInfo.total = cartTotal


    cartInfo.map(e => {
        const checkPromo = 'promotion' in e
        if(checkPromo) {
            const {promotion,total,qty} = e
            const {promo_type,trigger,} = promotion

            let min, checker;

             switch (trigger) {
                case 'Minimum Quantity Purchase':
                    min = 'min_quantity'
                    break;
                case 'Minimum Purchase Value':
                    min = 'min_value'
                    break;
                case 'Cart Total Purchase':
                    min = 'min_value_cart'
                    break;
                default:
                    break;
            }

            switch (promo_type) {
                case 'Percent Discount':
                    checker = percentDiscount(qty,promotion[min],e)
                    return checker;
                    break;
            
                default:
                    break;
            }
        } else {
            e.newTotal = e.total
            e.totalDiscount = 0
            e.eachDiscount = 0
        }


    })

    const cartWDiscountTotal = items.map(e => e.newTotal).reduce((prev,curr) => prev + curr,0)

    cartInfo.wDiscountTotal = cartWDiscountTotal

    return cartInfo;


}

export default useDiscount