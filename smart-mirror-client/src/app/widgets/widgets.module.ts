import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { WifiNameComponent } from './wifi-name/wifi-name.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { WifiNameService } from './wifi-name/wifi-name.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    ClockComponent,
    WeatherComponent,
    WifiNameComponent,
  ],
  exports: [
    ClockComponent,
    WeatherComponent,
    WifiNameComponent,
  ],
  providers: [
    WifiNameService
  ]
})
export class WidgetsModule { }
