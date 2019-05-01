
var ctx = document.getElementById('myChart').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F','S'],
        datasets: [{
            label: '# of Visits',
            data: [60, 80, 175, 110, 210, 190,75],
            backgroundColor: [
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)'
            ],
            hoverBackgroundColor: [
              'rgba(115, 119, 191, .8)',
              'rgba(115, 119, 191, .8)',
              'rgba(115, 119, 191, .8)',
              'rgba(115, 119, 191, .8)',
              'rgba(115, 119, 191, .8)',
              'rgba(115, 119, 191, .8)',
              'rgba(115, 119, 191, .8)'
            ]
        }]
    },
    options: {

      legend: {
            display: false
          },
      tooltips: {
        enabled: false
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//get navigation items

//if clicked create a new chart and set menu item active

//if menu item is active don't create a new chart on clicked

//maybe use case


var ctx2 = document.getElementById('myChart2').getContext("2d");
var myPieChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktops'],
        datasets: [{
            label: '# of Visits',
            data: [70, 40, 175],
            backgroundColor: [
                'rgba(129, 201, 143, 1)',
                'rgba(116, 177, 191, 1)',
                'rgba(115, 119, 191, 1)'
            ],
            hoverBackgroundColor: [
              'rgba(129, 201, 143, .8)',
              'rgba(116, 177, 191, .8)',
              'rgba(115, 119, 191, .8)'
            ]
        }]
    },
    options: {

      legend: {
            position: 'right'
          }
        }
});
