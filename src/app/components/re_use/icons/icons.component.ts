import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
})
export class IconsComponent implements OnInit {
  // @Input() cIcon!: string;
  

  @Input() cIcon!: string[]
  @Input() href!: string;
  @Input() cToolTip!: string[];
  
  @Input() toolTitle!: string;
  @Input() iconTitle!: string;

  // @Input() cIconName!: String;

  constructor() {}

  ngOnInit(): void {}
}
