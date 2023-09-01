import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-sharepoint',
  templateUrl: './sharepoint.component.html',
  styleUrls: ['./sharepoint.component.css']
})
export class SharepointComponent implements OnInit {

  constructor() {

  }



  ngOnInit(): void {
    /*FONCTION SHAREPOINT*/
    var myChart = new Chart("mySharePointChart", {
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

