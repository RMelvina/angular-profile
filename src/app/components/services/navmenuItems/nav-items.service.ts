import { Injectable } from '@angular/core';
interface NavItem {
  title: String;
  url: String;
  cName: String;
} 
@Injectable({
  providedIn: 'root',
})
export class NavItemsService {
 
  public navItems: NavItem[];
  
  constructor() {
    
    this.navItems = [
      {
        title: 'Home',
        url: 'angular-profile',
        cName: 'nav-link',
      },
      {
        title: 'About',
        url: 'about',
        cName: 'nav-link',
      },
      {
        title: 'Projects',
        url: 'projects',
        cName: 'nav-link',
      },
    ];
  }

 

  getNavItemsName(){
   return this.navItems.map((items) => {
      return items

    })
  }

   
}
