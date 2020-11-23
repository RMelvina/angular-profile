import { Component, OnInit } from '@angular/core';
import { ArrayListService } from '../services/arrayList/array-list.service';

@Component({
  selector: 'app-projects-pg',
  templateUrl: './projects-pg.component.html',
  styleUrls: ['./projects-pg.component.css'],
})
export class ProjectsPgComponent implements OnInit {
  projects = this.arrayListService.getProjects();
  // btn view github
  btn = 'btn';
  view = 'view';
  github = 'github';

  constructor(private arrayListService: ArrayListService) {}

  ngOnInit(): void {}
}
