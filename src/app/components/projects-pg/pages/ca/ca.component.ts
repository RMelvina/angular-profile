import { Component, OnInit } from '@angular/core';
import { ArrayListService } from '../../../services/arrayList/array-list.service';
import { TextService } from '../../../services/text/text.service'; 

@Component({
  selector: 'app-ca',
  templateUrl: './ca.component.html',
  styleUrls: ['./ca.component.css'],
})
export class CAComponent implements OnInit {
  title = 'Cooking App';
  btnName = 'GITHUB';
  btnUrl = 'https://github.com/RMelvina/RecipesApp.git';
  gitHub = 'github';
  btnSize = 'btn-size';
  text = this.textService.getQCADesc();
  lines = this.textService.getQCALearned();
  pInfor = this.arrayListService.getCAProjectsInfor();
  

  col1 =
    'col-lg-12 col-md-12 col-sm-12 text-sm-center col-12 pt-5 d-flex align-items-center';

  col2 = 'notDisplay ';

  constructor(
    private textService: TextService,
    private arrayListService: ArrayListService
  ) {}

  ngOnInit(): void {}
}
