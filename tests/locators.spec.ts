import {test,expect} from "@playwright/test"

test("To user lunch browser",async({page})=>{
    await page.goto("https://playwright.dev/docs/writing-tests")
    const title=await page.title();
    console.log(title);
    await expect(page).toHaveTitle(/Playwright/)
    await page.pause()
});


test("to user launch amazon",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder('Username').fill("standard_user");
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.pause();

});


// test.only("To use buildin locatord",async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/");
//     let heading=await page.getByText('Test login');//heading --->element
//     let actualText=await heading.innerText();
//     console.log(actualText);
//    // await expect(heading).toHaveText('Test login');
//      await expect(heading).toBeVisible();
// });

// test.only("To use buildin locatord",async({page})=>{
//     await page.goto("https://practice.expandtesting.com/locators#google_vignette");
//     const country=await page.getByLabel('Choose a country')
//     const text=await country.innerText();
//     console.log(text)
// });

// test.only("To use buildin locatord",async({page})=>{
//     await page.goto("https://practicetestautomation.com/");
//     await page.pause();
//     const img=await page.getByAltText('Practice Test Automation');
//     await expect(img).toBeVisible();
//     await page.pause();
// });

// test.only("To use buildin locatord",async({page})=>{
//     await page.goto("https://www.flipkart.com/");
  
//     await page.getByTitle('Login').click();
//     await page.pause();
// });

// test.only("To use buildin locatord",async({page})=>{
//     await page.goto("https://www.saucedemo.com/");
  
//     const Userna=await page.getByRole('textbox',{name:'Username'});
//     await expect(Userna).toBeVisible();
//     await Userna.fill("demo");
//     await page.pause()
// });

// test.only("To use css locators",async({page})=>{
//     await page.goto("https://www.saucedemo.com/");
//     //css
//     // * contains
//     await page.locator('[id*="user"]').fill('standard_user');//return webelement
//     //^ -starts with
//     await page.locator('[placeholder^="P"]').fill("secret_sauce")
//     // $ end with
//     await page.locator('[type$="it"]').click();
    
//     await page.pause()
// });

// 