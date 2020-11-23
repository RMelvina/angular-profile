import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-web-info-pg',
  templateUrl: './web-info-pg.component.html',
  styleUrls: ['./web-info-pg.component.css'],
})
export class WebInfoPgComponent implements OnInit {
  constructor() {}
  @Input() text!: string;
  @Input() imgSrc!: string;
  @Input() arrays!: string[];
  @Input() title!: string;
  @Input() imgStyle!: string[];
  @Input() btnUrl!: string;
  @Input() btnName!: string;
  @Input() btnClass!: string[];
  @Input() target!: boolean;


  ngOnInit(): void {}
}
