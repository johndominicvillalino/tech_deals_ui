import { MIN_QUANTITY, MIN_VALUE, FREE_ITEM_DISCOUNT, PERCENT_DISCOUNT, SPECIFIC_AMOUNT_DISCOUNT } from "./constants";

export function priceFormat(price, locale = 'us-US', currency = 'USD') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(price)
}

function triggerCheck(trigger, e) {

    let value, compare;

    switch (trigger) {
        case MIN_VALUE:
            value = 'total'
            break;
        case MIN_QUANTITY:
            value = 'qty'
            break;
        default:
            break;
    }

    compare = e[value]

    return compare;

}


export function percentDiscount(toCheck, e, trigger, promo_type) {

    const value = triggerCheck(trigger, e)

    if (value >= toCheck) {

        let instance = Math.trunc(value / toCheck)
        let eachDiscount = ((parseInt(e.promotion.percent_discount) / 100) * e.price)
        if (trigger == MIN_VALUE) {
            eachDiscount = ((parseInt(e.promotion.percent_discount) / 100) * toCheck)
        }
        let discount = instance * eachDiscount
        let newTotal = e.total - discount
        let discountInfo = e
        let freeItem = e.promotion.free_item

        switch (promo_type) {
            case FREE_ITEM_DISCOUNT:
                freeItem += ` (${instance})`
                discountInfo.free_item = freeItem
                discount = 0
                eachDiscount = 0
                newTotal = e.total
                break;
            case SPECIFIC_AMOUNT_DISCOUNT:
                eachDiscount = e.promotion.specific_discount_amount
                discount = eachDiscount * instance
                newTotal = e.total - discount
                break;

            default:
                break;
        }

        discountInfo.newTotal = newTotal
        discountInfo.totalDiscount = discount
        discountInfo.eachDiscount = eachDiscount
        


        return discountInfo;
    }

    e.newTotal = e.total
    e.totalDiscount = 0
    e.eachDiscount = 0
    e.free_item = ''
    return e;

}