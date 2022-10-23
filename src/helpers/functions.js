export function priceFormat (price, locale='us-US',currency = 'USD') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(price)
}

export function percentDiscount (value,toCheck,e) {

    if(value >= toCheck) {
       const instance = Math.trunc(value / toCheck)
       const eachDiscount = ((parseInt(e.promotion.percent_discount) / 100) * e.price)
       const discount = instance *  eachDiscount
       const newTotal = e.total - discount
       const discountInfo = e
       discountInfo.newTotal = newTotal
       discountInfo.totalDiscount = discount
       discountInfo.eachDiscount = eachDiscount
       return discountInfo;
    }

    e.newTotal = e.total
    e.totalDiscount = 0
    e.eachDiscount = 0

    return e;
  
}