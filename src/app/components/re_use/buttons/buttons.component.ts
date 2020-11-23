import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  @Input() btnUrl!: string;
  @Input() btnName!: string;
  @Input() btnClass!: string[];
  @Input() target!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
