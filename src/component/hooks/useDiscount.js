import { percentDiscount } from "../../helpers/functions";
import { MINIMIN_QUANTITY_PURCHASE, MIN_QUANTITY , MININUM_PURCHASE_VALUE,MIN_VALUE, PERCENT_DISCOUNT, SPECIFIC_AMOUNT_DISCOUNT,FREE_ITEM_DISCOUNT} from "../../helpers/constants";



function useDiscount(items) {


    const cartInfo = items
    const cartTotal = items.map(e => e.total).reduce((prev,curr) => prev + curr,0)
    cartInfo.total = cartTotal


    cartInfo.map(e => {
        const checkPromo = 'promotion' in e
        if(checkPromo) {
            const {promotion} = e
            const {promo_type,trigger,} = promotion

            let min, checker;

             switch (trigger) {
                case MINIMIN_QUANTITY_PURCHASE:
                    min = MIN_QUANTITY
                    break;
                case MININUM_PURCHASE_VALUE:
                    min = MIN_VALUE
                    break;
                default:
                    break;
            }

            switch (promo_type) {
                case PERCENT_DISCOUNT:
                    checker = percentDiscount(promotion[min],e,min,promo_type)
                    return checker;
                    break;
                case SPECIFIC_AMOUNT_DISCOUNT:
                    checker = percentDiscount(promotion[min],e,min,promo_type)
                    return checker;
                    break;
                case FREE_ITEM_DISCOUNT:
                    checker = percentDiscount(promotion[min],e,min,promo_type)
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