import{test,expect, Locator} from "@playwright/test"


test("validate the actions",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    let button:Locator=page.getByRole('button',{name:"START"});
    await expect(button).toBeEnabled();
    await button.click();
    button
   
    let dcButton:Locator= page.locator('#field1');
    await dcButton.dblclick();

    dcButton.click({clickCount:3}); 
     dcButton.click({button:'right'});

    

     await page.waitForTimeout(5000);
});


test("To user fill",async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    let username:Locator=await page.getByPlaceholder('Username');
    await username.fill("standard_user");
    
    //getAttribute() -to get value of an attribute
    let attributeValue=await username.getAttribute('value');
    console.log(typeof attributeValue)
    console.log(attributeValue)
    await page.pause()
});


test("To use radio button",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    let maleButton:Locator=await page.locator("[value='male']");
    await maleButton.check();//to check radio
    await expect(maleButton).toBeChecked();//assert 
    await page.pause()
});

test("To user checkbox",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    // let day:Locator=await page.locator("#monday");
    // await day.check();//to check radio
    // await expect(day).toBeChecked();//assert 
    
    
    const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const checkboxs:Locator[]=days.map(value=>page.getByLabel(value));

    for(const cb of checkboxs){
        await cb.check();
    }

    await page.waitForTimeout(5000);

      for(const cb of checkboxs){
        await cb.uncheck();
    }
    
    await page.pause()
});


test.only("To use dropdown using select",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //dropdown -selectoption
    let contryDropDown= page.locator("#country")
    await contryDropDown.selectOption('France');//VisibleText
    await contryDropDown.selectOption({value:"uk"});//value
    await contryDropDown.selectOption({label:'China'});//label
    await contryDropDown.selectOption({index:1})

    //await page.pause()
});