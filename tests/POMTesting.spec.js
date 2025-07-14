const{test, expect}=require('@playwright/test');
const LoginPage = require('../pages/homePage');
test("TestingLoginPage",async({page})=>{

    const loginpageobj=new LoginPage(page);
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await loginpageobj.signPageApplication();
});

const NP=require('../pages/homePage');
test("NewLoginPage",async({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    const Loginpage1=new LoginPage(page);
    await Loginpage1.signPageApplication();
})