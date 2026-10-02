const base = require('@playwright/test');
const loginPayLoad = {userEmail: 'ay.filatova@gmail.com', userPassword: 'q$2e8*fV6*G8Z#j'}; 
const orderPayLoad = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};

const {APiUtils} = require('./APiUtils.js'); 

exports.customtest = base.test.extend({

    authenticatedPage: async({browser}, use)=>
    {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("ay.filatova@gmail.com");
    await page.locator("#userPassword").fill("q$2e8*fV6*G8Z#j");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await use(page);
    },


    createOrder: async ({ request }, use) => {
    const apiUtils = new APiUtils(request, loginPayLoad);
    const response = await apiUtils.createOrder(orderPayLoad);
    await use(response);
   }
   
}
)