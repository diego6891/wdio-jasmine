import Page from './page.js'

class ShopPage extends Page {
    /**
     * define elements
     */
    get javaScriptLink () { return $('=JavaScript') }
    get productWithStockList () { return $$('.instock')}
}

export default new ShopPage()