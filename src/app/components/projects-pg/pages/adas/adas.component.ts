import { Component, OnInit } from '@angular/core';
import { ArrayListService  } from "../../../services/arrayList/array-list.service";
import {TextService} from '../../../services/text/text.service'

@Component({
  selector: 'app-adas',
  templateUrl: './adas.component.html',
  styleUrls: ['./adas.component.css'],
})
export class ADASComponent implements OnInit {
  constructor(
    private arrayListService: ArrayListService,
    private textService: TextService
  ) {}

  title = 'Alzheimer\'s Disease Assessment Scale App';
  btnName = 'GITHUB';
  btnUrl = 'https://github.com/timeoutmode/ADAS.git';
  gitHub = 'github';
  btnSize = 'btn-size';
  pInfor = this.arrayListService.getADASProjectsInfor();
  lines = this.textService.getADASLearned();
  text = this.textService.getADASDesc();

  ngOnInit(): void {}
}
