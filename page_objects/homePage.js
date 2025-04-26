
class HomePage {

    constructor(page) {
       
        this.page = page;

        this.createAdBtn = page.locator('.create');
        this.loginInBtn = page.locator('.register[href="/login"]');
    }

    async open() {
        await this.page.goto('/');
    }
}

export default HomePage;