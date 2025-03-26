import {Component} from '@angular/core';
import {WeatherService} from '../weather.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-weather',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
    city: string = '';
    weatherData: any;
    errorMessage: string = '';

    constructor(private weatherService: WeatherService) {
    }

    getWeather() {
        this.errorMessage = '';
        this.weatherService.getWeather(this.city).subscribe({
            next: (data) => (this.weatherData = data),
            error: (error) =>
                (this.errorMessage = 'Cidade não encontrada ou erro na consulta.'),
        });
    }
}
