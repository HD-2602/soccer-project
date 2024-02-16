import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup;
  weatherResult: any;
  // icon: string;

  constructor(private formBuilder: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
      city: ["", [Validators.required]]
    });
  }

  search() {
    console.log("Here city", this.weatherForm.value);
    this.weatherService.searchWeather(this.weatherForm.value.city).subscribe(
      (data) => {
        console.log("Here result From BE ", data.result);
        this.weatherResult = data.result;
        // 2ème solution de récupération de l'icon
        // this.icon = `https://openweathermap.org/img/wn/${data.result.icon}@2x.png`
      });
  }
}
