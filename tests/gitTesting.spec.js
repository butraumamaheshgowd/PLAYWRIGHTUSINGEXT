const {test,expect}=require("@playwright/test");

test.only("my testing test", async function({page}){

    //await page.goto('https://freelance-learn-automation.vercel.app/signup');
    //await page.getByLabel('Email').fill("umamahesh.gowd@gmail.com");
    await page.goto('https://www.google.com/');
    //await page.locator('//textarea[@name="q"]').fill("Umamahesh");
    await page.locator('//textarea[@name="q"]').fill("Umamahesh")

})