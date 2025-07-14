const {test,expect}=require('@playwright/test');
const {loginPage}=require('..//pages/loginPage');



test("Select Text", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.locator('//input[@placeholder="Enter Email"]').fill("admin@email.com");
    await page.waitForTimeout(2000);
    await page.locator('//input[@placeholder="Enter Password"]').fill("admin@123");
    await page.waitForTimeout(2000);
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(2000);
    const CourseName = await page.$$('//h2[@class="name"]');

    for (let i = 0; i < CourseName.length; i++) {
        const CourseContent = await CourseName[i].textContent();
        const ExtractName = CourseContent?.trim();
        console.log(CourseContent?.trim());
        if (ExtractName === "Test course") {
            await page.locator('button:has-text("Add to Cart")').nth(i).click();
            await page.waitForTimeout(2000);
            break;
        }
    }

})




test("Testing", async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login");
    
    await page.locator('//input[@placeholder="Enter Email"]').fill("admin@email.com");
    await page.waitForTimeout(2000);
    await page.locator('//input[@placeholder="Enter Password"]').fill("admin@123");
    await page.waitForTimeout(2000);
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(2000);

    const elementValue=await page.$$('//h2[@class="name"]');

    for(let i=0;i<elementValue.length;i++){
        const EV2=await elementValue[i].textContent();
        const EV3= EV2?.trim();
        console.log(EV3);
        if(EV3==='Test course'){
            await page.locator('button:has-text("Add to Cart")').nth(i).click();
            break;
        }
    }

})





test.only("TestingNo3", async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login");
     await page.locator('//input[@placeholder="Enter Email"]').fill("admin@email.com");
    await page.waitForTimeout(2000);
    await page.locator('//input[@placeholder="Enter Password"]').fill("admin@123");
    await page.waitForTimeout(2000);
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(2000);

    const NEV1= await page.$$('//h2[@class="name"]');
    for(let i=0; i<NEV1.length; i++){
        let NEV2=NEV1[i].textContent();
        let NEV3=NEV2?.trim()
        if(NEV3==="Test course"){
            await page.locator('button:has-text("Add to Cart")').nth(i).click();
            console.log('We have clicked on add to cart for :', NEV3);
        }
    }
})