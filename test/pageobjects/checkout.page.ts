import Page from './page.js';
import orderData from "../data/order.json" assert { type: 'json' };


class CheckoutPage extends Page {
    /**
     * define elements
     */
    get firstNameInput () { return $('#billing_first_name')}
    get lastNameInput () { return $('#billing_last_name')}
    get emailAddressInput () { return $('#billing_email')}
    get phoneInput () { return $('#billing_phone')}
    get addressInput () { return $('#billing_address_1')}
    get cityInput () { return $('#billing_city')}
    get zipInput () { return $('#billing_postcode')}
    get stateInput () { return $('#billing_state')}
    get countryDropdown () { return $('#s2id_billing_country')}
    get countryInput () { return $('#select2-chosen-1')}
    get rowCountryDropdown () { return $('.select2-result-label')}
    get placeOrderBtn () { return $('#place_order')}
    get orderReceivedLabel () { return $('.woocommerce-thankyou-order-received')}

    async placeOrder(){
        await this.firstNameInput.addValue(orderData.firstName);
        await this.lastNameInput.addValue(orderData.lastName);
        await this.emailAddressInput.addValue(orderData.emailAddress);
        await this.phoneInput.addValue(orderData.phone);
        await this.addressInput.addValue(orderData.address);
        await this.cityInput.addValue(orderData.city);
        await this.zipInput.addValue(orderData.zip);
        await this.countryDropdown.click();
        await this.countryInput.addValue(orderData.country);
        await this.rowCountryDropdown.click()
        await this.stateInput.addValue(orderData.state);
        await this.placeOrderBtn.waitForClickable({ timeout: 5000 });
        await this.placeOrderBtn.click();
    }
}

export default new CheckoutPage()