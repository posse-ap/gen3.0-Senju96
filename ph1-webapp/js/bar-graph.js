const ctx = document.getElementById('bar-graph');
const myChart = new Chart(ctx, {
  type: 'bar',
  options:{
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          // stepSize: 3,
          callback: function(value){
            if(value % 2 != 0  ){
              return value + 1;
            };
          }
        },

      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {     // 目盛り        
          min: 0,      // 最小値
          max: 8,     // 最大値
          stepSize: 2, // 間
          callback: function(value){
                  return value + "h";
              }
      }
        // ticks: {
        //     min: 0,
        //   // stepSize: 3,
        //   callback: function(value){
        //     if(value % 2 != 0  ){
        //       return value + 1 + "h";
        //     };
        //   }
        // },
      },
  },


    plugins:{
      legend: {
        display: false,
      },
      labels:{
        render: 'percentage',
      }
    }
  },
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [{
      data: [3,4,5,3,0,0,4,2,2,8,8,2,2,1,7,4,4,3,3,3,2,2,6,2,2,1,1,1,7,8],
      backgroundColor: '#0099FF',
    }],
  },
});