const {test,expect}=require("@playwright/test")

test("MyDropDown",async function({page}){

    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    await page.locator('#state').selectOption({label:'Goa'});
    await page.waitForTimeout(2000);
    await page.locator('#state').selectOption({index:4});
    await page.waitForTimeout(2000);
    await page.locator('#state').selectOption({option:'Goa'});
    await page.waitForTimeout(2000);

    var stateValue= await page.$('#state');
    var AllStateValues=await stateValue.$$('option');
    for(let i=0;i<AllStateValues.length;i++){
        var valuesofAllStates=await AllStateValues[i]
        var valuesofS=await valuesofAllStates.textContent();

        console.log(valuesofS);
        
    }

    await page.locator('#hobbies').selectOption(['Playing','Reading']);

})


test("my testing test", async function({page}){

    //await page.goto('https://freelance-learn-automation.vercel.app/signup');
    //await page.getByLabel('Email').fill("umamahesh.gowd@gmail.com");
    await page.goto('https://www.google.com/');
    //await page.locator('//textarea[@name="q"]').fill("Umamahesh");
    await page.locator('//textarea[@name="q"]').fill("Umamahesh")

})


test.only("Select Text", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.locator('//input[@placeholder="Enter Email"]').fill("admin@email.com");
    await page.waitForTimeout(2000);
    await page.locator('//input[@placeholder="Enter Password"]').fill("admin@123");
    await page.waitForTimeout(2000);
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(2000);

    // const headerValue=  await page.$$('h2');
    // for(let i=0;i<headerValue.length;i++){
    //     let headerValueElements=await headerValue[i];
    //     let valueOfH2= headerValueElements.textContent();
    //     console.log(valueOfH2);
    // }
    const headerElements = await page.$$('//h2[@class="name"]');

    for (let i = 0; i < headerElements.length; i++) {
        const valueOfH2 = await headerElements[i].textContent();
        let realValue = valueOfH2?.trim();
        console.log(valueOfH2?.trim(),  i);
        if (realValue === "Java For Tester") {
            await page.locator('button:has-text("Add to Cart")').nth(i).click();
            break;

        }

        console.log(valueOfH2?.trim());
        await page.waitForTimeout(2000);
    }



})


//  const h2Elements = await page.$$('//h2');
//   for (let i = 0; i < h2Elements.length; i++) {
//     const text = await h2Elements[i].textContent();
//     console.log(`H2 #${i + 1}: ${text}`);
//   }