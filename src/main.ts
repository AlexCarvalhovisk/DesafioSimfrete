import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {WeatherComponent} from './app/weather/weather.component';
import {provideHttpClient, withInterceptorsFromDi,} from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WeatherComponent],
    template: `
    <app-weather></app-weather>
  `,
})
export class App {
}

bootstrapApplication(App, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
    ],
});
