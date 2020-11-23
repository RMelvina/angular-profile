import { Component, OnInit } from '@angular/core';
import { ArrayListService } from '../services/arrayList/array-list.service';
import { TextService } from '../services/text/text.service';
// import ImgPortfolio from '../../../assets/images/img_photo.jpeg';

@Component({
  selector: 'app-about-pg',
  templateUrl: './about-pg.component.html',
  styleUrls: ['./about-pg.component.css'],
})
export class AboutPgComponent implements OnInit {
  img = this.textService.getProfileImg();
  text = this.textService.getAboutMeText();
  s = this.arrayListService.getSkills();
  



  

  constructor(
    private arrayListService: ArrayListService,
    private textService: TextService
  ) {}

  ngOnInit(): void {}
}
