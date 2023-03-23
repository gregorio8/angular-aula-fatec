import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  standalone: true,
})
export class TimerComponent implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit() {}

  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);

  getSeconds() {
    return Math.trunc(this.counter % 60);
  }

  getMinutes() {
    return Math.trunc(this.counter / 60);
  }
}
