// chart.jsで書くならこっち。％はつかん。
// html
/* <div>
  <canvas id="pie-chart-lang"></canvas>
</div> */
/* <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script> */
/* <script src="../js/pie-chart-lang.js" defer></script> */


const ctxy = document.getElementById('pie-chart-lang');
new Chart(ctxy, {
  type: 'doughnut',
//   options: {
//     responsive: false,
//     plugins: {
//         datalabels: {
//             color: '#000',
//             font: {
//                 weight: 'bold',
//                 size: 20,
//             },
//             formatter: (value, ctxy) => {
//                 return value + '%';
//             },
//         }
//     }
// },
  options:{
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            return data.labels[tooltipItem.index]
              + ": "
              + data.datasets[0].data[tooltipItem.index]
              + " %"; //ここで単位を付けます
          }
        }
    },
    plugins:{
      
      legend: {
        display: false,
      },
      // labels:{
      //   render: 'percentage',
      //   fontColor: 'white',
      //   fontSize: 20
      // }
    }
  },
  data: {
    labels: ['HTML', 'CSS', 'SQL', 'SHELL', 'JavaScript', '情報システム基礎知識(その他)', 'PHP', 'Laravel'],
    datasets: [{
      data: [30, 20, 20, 20, 10, 10, 5, 5],
      backgroundColor: [
        'rgb(65,105,225)',
        'rgb(70,130,180)',
        'rgb(135,206,235)',
        'rgb(65,105,225)',
        'rgb(147,112,219)',
        'rgb(106,90,205)',
        'rgb(106,76,156)',
        'rgb(35,59,108)'
      ]
    }]
  }
})