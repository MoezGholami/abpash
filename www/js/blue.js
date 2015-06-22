var ConnectionInterrupted=true;

function nop(){}

function onConnectionFailure(reason)
{
	if(ConnectionInterrupted==false)
		bluetoothSerial.disconnect(nop,nop);
	ConnectionInterrupted=true;
	window.alert("نشد که وصل بشم");
}

function onCommunicationFailure(reason)
{
	if(ConnectionInterrupted==false)
		bluetoothSerial.disconnect(nop,nop);
	ConnectionInterrupted=true;
	window.alert("ارتباط نا موفق");
}


function onReceiving()
{
	bluetoothSerial.readUntil('$', 
			function(data) {
				data=data.replace(/ /g,'');
				data=data.replace(/\s/g,'');
				if(data=="")
					return ;
				var tempDataReceived=data.split(",");
				for(var i=0; i<tempDataReceived.length; i++)
				{
					tempDataReceived=parseInt(tempDataReceived[i]);
				}
				MicroData.concat(tempDataReceived);
				MicroData.splice(MicroDataSize-1,MicroData.length);
				bluetoothSerial.disconnect(nop,nop);
			}
			, onCommunicationFailure);
}

function onConnect()
{
	ConnectionInterrupted=false;
	bluetoothSerial.write('s', onReceiving, onCommunicationFailure);
}

function synchData()
{
	// /*
	alert('salam');
	MicroData[0]=1;
	lineChart.datasets[0].points[0].value=1;
	lineChart.update();
	// */
	 /*
	ConnectionInterrupted=true;
	bluetoothSerial.connect(BlueDevMacAdr, onConnect, onConnectionFailure);
	// */
}
