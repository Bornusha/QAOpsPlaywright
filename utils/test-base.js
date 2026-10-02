const base= require('@playwright/test');

exports.customtest = base.test.extend(
   {
 testDataForOrder: {
   userName: "ay.filatova@gmail.com",
   password : "q$2e8*fV6*G8Z#j",
   productName : "Zara Cost 4"
   } 
}
)