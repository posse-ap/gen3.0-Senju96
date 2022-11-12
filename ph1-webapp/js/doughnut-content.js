google.load('visualization', '1.0', {'packages':['corechart']});

//callback
google.setOnLoadCallback(drawChart);

// グラフ用 function
function drawChart(){
	var data2 = new google.visualization.arrayToDataTable([
		['',''],
		['N予備校',40],
		['ドットインストール',40],
		['課題',20],
	]);

	var formatter2 = new google.visualization.NumberFormat({pattern:'##'});
	formatter2.format(data2,1);

	
  var options2 = {
		fontName:"sans-serif",
		chartArea:{width:'100%',height:'100%'},
		colors:['rgb(65,105,225)','rgb(70,130,180)','rgb(135,206,235)'],
		legend: {position:'bottom'},
		// tooltip:{
		// 	textStyle:{bold:'false',fontSize:10}
		// },
		pieSliceText:'percentage',
		pieSliceTextStyle:{fontSize:12},
	  pieHole: 0.4,
		backgroundColor: 'transparent'
}

	var chart2 = new google.visualization.PieChart(document.getElementById('doughnut-content'));
	chart2.draw(data2, options2);

}