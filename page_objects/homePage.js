
class HomePage {

    constructor(page) {
       
        this.page = page;

        this.createAdBtn = page.locator('.create');
        this.loginInBtn = page.locator('.register[href="/login"]');
        this.newRadioButton = page.locator('#new');
        this.usedRadioButton = page.locator('#used');
        this.searchField = page.locator('[placeholder="What are you looking for?"]');
    }

    async open() {
        await this.page.goto('/');
    }

    async checkNewRadionButton() {
        await this.newRadioButton.check();
    }

    async checkUsedRadioButton() {
        await this.usedRadioButton.check();
    }
}

export default HomePage;