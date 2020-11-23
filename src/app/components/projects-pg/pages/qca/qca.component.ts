import { Component, OnInit } from '@angular/core';
import { ArrayListService } from '../../../services/arrayList/array-list.service';
import { TextService } from '../../../services/text/text.service';

@Component({
  selector: 'app-qca',
  templateUrl: './qca.component.html',
  styleUrls: ['./qca.component.css'],
})
export class QCAComponent implements OnInit {
  title = 'Quick Coaching App';
  btnName = 'GITHUB';
  btnUrl = 'https://github.com/RMelvina/QuickCoachingApp.git';
  gitHub = 'github';
  btnSize = 'btn-size';
  text = this.textService.getQCADesc();
  lines = this.textService.getQCALearned();
  pInfor = this.arrayListService.getQCAProjectInforD();
  

  constructor(
    private textService: TextService,
    private arrayListService: ArrayListService
  ) {}

  ngOnInit(): void {}
}
