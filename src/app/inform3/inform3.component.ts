import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-inform3',
  templateUrl: './inform3.component.html',
  styleUrls: ['./inform3.component.css']
})
export class Inform3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*FONCTION ECOMMERCE*/
    var myChart = new Chart("myM3Chart", {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
