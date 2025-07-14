class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = '//input[@placeholder="Enter Email"]';
        this.password = '//input[@placeholder="Enter Password"]';
        this.submit = '//button[@type="submit"]';
    }
    async signPageApplication() {
        await this.page.fill(this.userName, "admin@email.com");
        await this.page.fill(this.password, "admin@123");
        await this.page.click(this.submit);
    }
}
module.exports=LoginPage;