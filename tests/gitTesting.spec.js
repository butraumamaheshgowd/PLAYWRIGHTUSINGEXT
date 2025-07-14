const {test,expect}=require("@playwright/test");
const { promises } = require("dns");

test("my testing test", async function({page}){

    //await page.goto('https://freelance-learn-automation.vercel.app/signup');
    //await page.getByLabel('Email').fill("umamahesh.gowd@gmail.com");
    await page.goto('https://www.google.com/');
    //await page.locator('//textarea[@name="q"]').fill("Umamahesh");
    await page.locator('//textarea[@name="q"]').fill("Umamahesh")

})


test("multipleBrowser", async({browser})=>{

   const context =await browser.newContext();
   const page= await context.newPage();
   

   await page.goto("https://freelance-learn-automation.vercel.app/signup");
  

   const [newPage]=await Promise.all(
    [
        context.waitForEvent("page"),
        page.locator('//a[@target="_blank"][4]').click(),

    ]
   )
});





test("multiple browser", async({browser})=>{

    const context =await browser.newContext()
    const page=await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/signup");

   const [newPage] = await Promise.all(
    [
        context.waitForEvent("page"),
        page.locator('//a[@target="_blank"][1]').click(),
    ]
   )
   await newPage.locator('//input[@placeholder="Search"]').fill("playwright");
})