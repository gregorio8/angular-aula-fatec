import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { TimerComponent } from './timer/timer.component';
import { RandomComponent } from './random/random.component';
import { FormsModule } from '@angular/forms';
import { CompoundComponent } from './compound/compound.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TimerComponent,
    RandomComponent,
    CompoundComponent,
    FormsModule,
  ],
  template: `
    <app-header></app-header>
    <app-timer></app-timer>
    <app-random></app-random>
    <app-compound></app-compound>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
