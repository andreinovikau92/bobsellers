
class HomePage {

    constructor(page) {
       
        this.page = page;

        this.createAdBtn = page.locator('.create');
    }

    async open() {
        await this.page.goto('/');
    }
}

export default HomePage;