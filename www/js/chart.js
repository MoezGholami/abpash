function init_data_values()
{
	BlueDevMacAdr="AA:BB:CC:DD:EE:FF";
	MicroDataSize=20;
	MicroData=[];
	XAxis=[];
	for(var i=0; i<MicroDataSize; i++)
	{
		XAxis[i]=i+1;
		MicroData[i]=Math.random()*15+5;
	}
}

init_data_values();

var data = {
	labels: XAxis,
	datasets: [
	{
		label: "My First dataset",
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

function initChart()
{
	var ctx = document.getElementById("moist_chart").getContext("2d");
	lineChart = new Chart(ctx).Line(data, null);
}
