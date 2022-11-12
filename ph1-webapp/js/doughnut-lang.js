google.load('visualization', '1.0', {'packages':['corechart']});

//callback
google.setOnLoadCallback(drawChart);

// グラフ用 function
function drawChart(){
	var data2 = new google.visualization.arrayToDataTable([
		['',''],
		['HTML',30],
		['CSS',20],
		['SQL',20],
		['SHELL',20],
		['JavaScript',10],
		['情報システム基礎知識(その他)',10],
		['PHP',5],
		['Laravel',5],
	]);

	var formatter2 = new google.visualization.NumberFormat({pattern:'##'});
	formatter2.format(data2,1);

	var options2 = {
		fontName:"sans-serif",
		chartArea:{width:'100%',height:'100%'},
		colors:['rgb(65,105,225)','rgb(70,130,180)','rgb(135,206,235)','rgb(65,105,225)','rgb(147,112,219)','rgb(106,90,205)','rgb(106,76,156)','rgb(35,59,108)'],
		legend: {position:'bottom'},
		// tooltip:{
		// 	textStyle:{bold:'false',fontSize:10}
		// },
		pieSliceText:'percentage',
		pieSliceTextStyle:{fontSize:12},
  pieHole: 0.4,
		backgroundColor: 'transparent'
	};

	var chart2 = new google.visualization.PieChart(document.getElementById('doughnut-lang'));
	chart2.draw(data2, options2);

}