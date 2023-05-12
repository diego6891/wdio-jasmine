import Page from './page.js'

class ProductPage extends Page {
    /**
     * define elements
     */
    get qtyInput () { return $('[name="quantity"]') }
    get addToBasketBtn () { return $('.single_add_to_cart_button')}
    get viewBasketBtn () { return $('=View Basket')}
}

export default new ProductPage()