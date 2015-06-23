var blue = {
	endIdentifier:'A',
	delimeter:',',
	startCommunication: function() {
			       bluetoothSerial.connect(BlueDevMacAdr, blue.onConnect, blue.onDisconnect);
		       },
	onConnect: function() {
			   bluetoothSerial.write("a", function(){}, function(){});
			   bluetoothSerial.subscribe(blue.endIdentifier, blue.onMessage, blue.subscribeFailed);
		   },
	onDisconnect: function() {
			      alert("نشد که وصل شم");
		      },
	onMessage: function(data) {
			   blue.processGottenData(data.toString());
			   bluetoothSerial.unsubscribe();
			   bluetoothSerial.disconnect();
		   },
	subscribeFailed: function() {
				 alert("ارتباط قطع شد");
			 },
	processGottenData: function(data)
	{
		var coppiedData=data.replace(blue.endIdentifier,'');
		coppiedData=coppiedData.replace(/ /g,'');
		coppiedData=coppiedData.replace(/\s/g,'');
		if(coppiedData=="")
			return ;
		parsedData=coppiedData.split(blue.delimeter);
		for(var i=0; i<parsedData.length; i++)
			parsedData[i]=parseInt(parsedData[i]);
		var TempMicroData=MicroData.concat(parsedData);
		TempMicroData.splice(0,TempMicroData.length-MicroDataSize);
		for(var i=0; i<MicroDataSize; i++)
			MicroData[i]=TempMicroData[i];
	}
};
