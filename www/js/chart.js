function initChart()
{
	var ctx = document.getElementById("moist_chart").getContext("2d");
	chartData = {
		labels: XAxis,
		datasets: [
		{
			label: "Moisture Chart",
			fillColor: 'rgba(32, 111, 204, 0.4)',
			strokeColor: 'rgb(56, 117, 214)',
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: MicroData
		}
		]
	};
	lineChart = new Chart(ctx).Line(chartData, null);
}

function updateChart()
{
	for(var i=0; i<lineChart.datasets[0].points.length; i++)
		lineChart.datasets[0].points[i].value=MicroData[i];
	lineChart.update();
}
