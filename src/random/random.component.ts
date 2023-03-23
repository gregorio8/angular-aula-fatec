import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class RandomComponent implements OnInit {
  number: number = 10;
  array: any = [];

  constructor() {}

  ngOnInit() {}

  update() {
    this.array = [];
    for (let i = 1; i <= this.number; i++) {
      this.array.push(Math.trunc(100 * Math.random()));
    }
  }

  getNumbers() {
    return this.array;
  }
}
