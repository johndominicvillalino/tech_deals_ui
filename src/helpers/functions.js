export function priceFormat (price, locale='us-US',currency = 'USD') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(price)
}

