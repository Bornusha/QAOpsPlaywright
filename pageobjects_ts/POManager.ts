//const {LoginPage} = require('./LoginPage'); 
import {LoginPage} from '../pageobjects/LoginPage';

//const {DashboardPage} = require('./DashboardPage');
import { DashboardPage } from '../pageobjects/DashboardPage';


export class POManager
{
    constructor(page : page)
    {
      this.page=page;
      this.loginPage = new LoginPage(page);
      this.dashboardPage = new DashboardPage(page); 
    }

   getLoginPage()
   {
    return this.loginPage;
   }
   
   getDashboardPage()
   {
    return this.dashboardPage;
   }
}
module.exports = {POManager};