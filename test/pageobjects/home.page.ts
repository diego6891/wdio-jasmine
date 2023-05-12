import Page from './page.js'

class HomePage extends Page {
    /**
     * define elements
     */
    get shopMenu () { return $('#menu-item-40') }

    /**
     * define or overwrite page methods
     */
    open () {
        return super.open('https://practice.automationtesting.in/')
    }
}

export default new HomePage()