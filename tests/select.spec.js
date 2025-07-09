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


test.only("my testing test", async function({page}){

    //await page.goto('https://freelance-learn-automation.vercel.app/signup');
    //await page.getByLabel('Email').fill("umamahesh.gowd@gmail.com");
    await page.goto('https://www.google.com/');
    //await page.locator('//textarea[@name="q"]').fill("Umamahesh");
    await page.locator('//textarea[@name="q"]').fill("Umamahesh")

})