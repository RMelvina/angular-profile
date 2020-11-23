import { Component, OnInit, Input } from '@angular/core';
import { TextService } from '../../../services/text/text.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  constructor(private textService: TextService) {}

  title = 'Weather';
  btnUrl = 'https://rmelvina.github.io/weather/';
  btnName = 'View Website';
  text = this.textService.getWeatherDecs();
  used = this.textService.getWeatherUsed();
  
  img = 'assets/images/project-screens/weather.png';

  //  = 'assets/images/project-screens/weather.png';
  ngOnInit(): void {}
}
