import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css'],
})
export class HomePgComponent implements OnInit {
  linkedin = 'Linkedin';
  github = 'Github';
  cv = 'CV';

  color = 'font-color';
  toolTip = 'toolT';
  cIcon = 'icon';

  faLinkedinIcon = 'fa fa-linkedin';
  faGithubIcon = 'fa fa-github';
  faCvIcon = 'fa fa-file';

  linkedinUrl = 'https://www.linkedin.com/in/melvina-raj-2a4a38109/';
  githubUrl = 'https://github.com/RMelvina';
  cvUrl =
    'https://docs.google.com/document/d/1hpkwFqkyxQpTdNF2fESWyWXhBmd25u8uHckhsITLyzk/edit?usp=sharing';

  consructor() {}

  ngOnInit() {}
}
