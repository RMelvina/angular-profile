import { Component, OnInit } from '@angular/core';
import { NavItemsService } from '../services/navmenuItems/nav-items.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  click = false;
  i: any;

  name = this.navItemsService.getNavItemsName();
  icon = 'fa fa-times';
  icon2 = 'fa fa-bars';
  

  constructor(private navItemsService: NavItemsService) {}

  ngOnInit() {
    if (!this.i) {
      this.i = this.icon2;
    }

   
  }

  handleClick() {
    this.click = !this.click;
    this.i = this.click ? 'fa fa-times' : 'fa fa-bars';
    console.log(this.click);
  }
}
