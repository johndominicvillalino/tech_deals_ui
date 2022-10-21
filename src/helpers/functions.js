export function priceFormat (price, locale='ph-PH',currency = 'PHP') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(price)
}