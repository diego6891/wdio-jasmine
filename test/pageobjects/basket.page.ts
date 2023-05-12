import Page from './page.js'

class BasketPage extends Page {
    /**
     * define elements
     */
    get proceedToCheckoutBtn () { return $('.checkout-button')}
}

export default new BasketPage()