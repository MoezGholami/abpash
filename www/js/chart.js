var chartData = undefined;
function initChart()
{
	var ctx = document.getElementById("moist_chart").getContext("2d");
	chartData={
		labels: XAxis,
		datasets: [
		{
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
