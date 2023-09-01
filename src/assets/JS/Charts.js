window.onload = function(){
    chartSharepoint();chartEcommerce();chartInfor();chartPManagement();
};

/*FONCTION SHAREPOINT*/
function chartSharepoint(){
    const ctx1 = document.getElementById('mySharePointChart').getContext('2d');;
    new Chart(ctx1, {
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
      }
      );
  }
  
  /*FONCTION ECOMMERCE*/
  function chartEcommerce(){
    const ctx2 = document.getElementById('myEcommercetChart').getContext('2d');;
  
    new Chart(ctx2, {
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
    }
    );
  }
  
  /*FONCTION INFORM3*/
  function chartInfor(){
    const ctx3 = document.getElementById('myM3Chart').getContext('2d');;
  
    new Chart(ctx3, {
      type: 'doughnut',
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
  
  
  /*FONCTION PROJECT MANAGEMENT*/
  function chartPManagement(){
  
    const ctx4 = document.getElementById('myPManagementChart').getContext('2d');;
  
    new Chart(ctx4, {
      type: 'bar',
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