const {test, expect}=require('@playwright/test');


test("My Alert", async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on("dialog", async(dialog)=>{
        expect(dialog.message()).toContain("I am a JS Alert");
        await dialog.accept();

    });

    await page.locator("//button[@onclick='jsAlert()']").click();
     //await page.locator("//button[text()='Click for JS Alert']").click();
});

test("My Conform", async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", async(Dialog)=>{
        expect(Dialog.message()).toContain("I am a JS Confirm");
        await Dialog.accept();

    })

    await page.locator('#content > div > ul > li:nth-child(2) > button').click();
})


test("Confrim",async({page})=>{

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  page.on("dialog", async(promt)=>{
  expect(promt.message()).toContain("I am a JS Confirm");
  await promt.accept("umamahesh");

  })
  await page.locator('#content > div > ul > li:nth-child(2) > button').click()
});


///https://freelance-learn-automation.vercel.app/login

