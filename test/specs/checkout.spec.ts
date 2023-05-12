import HomePage from '../pageobjects/home.page.js'
import ShopPage from '../pageobjects/shop.page.js'
import ProductPage from '../pageobjects/product.page.js'
import BasketPage from '../pageobjects/basket.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('Checkout', () => {
    it('Perform checkout', async () => {
        //step 1 - Access https://practice.automationtesting.in/
        await HomePage.open();
        //step 2 - Access the Shop
        await HomePage.shopMenu.click();
        //step 3 - Filter for JavaScript
        await ShopPage.javaScriptLink.waitForClickable({ timeout: 8000 });
        await ShopPage.javaScriptLink.click();
        //step 4 - Open the Product Page - Select product with stock
        let firstProductWithStock = ShopPage.productWithStockList[0];
        await firstProductWithStock.click();
        //step 5 - Add quantity of the product to the cart
        await ProductPage.qtyInput.waitForExist({ timeout: 8000 });
        await ProductPage.qtyInput.clearValue();
        await ProductPage.qtyInput.addValue('3');
        //step 6 - Perform Checkout
        await ProductPage.addToBasketBtn.click();
        await ProductPage.viewBasketBtn.click();
        await BasketPage.proceedToCheckoutBtn.click();
        await CheckoutPage.placeOrder();
        //Checking the checkout is performed successfully
        await CheckoutPage.orderReceivedLabel.waitForExist({ timeout: 8000 });
        await expect(await CheckoutPage.orderReceivedLabel.isDisplayed()).toBeTruthy();
    })
})
