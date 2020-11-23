import { Component, OnInit, Input} from '@angular/core';
import { ArrayListService } from '../../services/arrayList/array-list.service';


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
})
export class SectionsComponent implements OnInit {
  @Input() title!: string;
  @Input() btnName!: string;
  @Input() btnClass!: string[];
  @Input() btnUrl!: string;
  @Input() text!: string;
  @Input() lines!: string[];
  @Input() pImgUrl!: string;
  @Input() imgDesc!: string;
  @Input() imgUrl!: string;
  @Input() pArray!: any[];
  @Input() listContainer!: string[];
  @Input() textContainer!: string[];

  constructor(private arrayListService: ArrayListService) {}
  // pInforD = this.arrayListService.getQCAProjectInforD();

  ngOnInit(): void {}
}



