import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class CompoundComponent implements OnInit {
  value: number;
  rate: number;
  months: number;

  constructor() {}

  ngOnInit() {}

  getParcialInterest(month) {
    return this.value * Math.pow(1 + this.rate, month);
  }

  getInterestValues() {
    let list: number[] = [];
    for (let i = 1; i <= this.months; i++) {
      list.push(this.getParcialInterest(i));
    }
    return list;
  }
}
