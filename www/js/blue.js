var blue = {
	initialize: function() {
			    this.bindEvents();
		    },
	bindEvents: function() {
			    document.getElementById("synchBtn").addEventListener('click', this.onDeviceReady, false);
		    },
	onDeviceReady: function() {
			       bluetoothSerial.connect(BlueDevMacAdr, blue.onConnect, blue.onDisconnect);
		       },
	onConnect: function() {
			   bluetoothSerial.write("a", function(){}, function(){});
			   bluetoothSerial.subscribe("A", blue.onMessage, blue.subscribeFailed);
		   },
	onDisconnect: function() {
			      alert("نشد که وصل شم");
		      },
	onMessage: function(data) {
			   counter.innerHTML = data;
			   bluetoothSerial.unsubscribe();
			   bluetoothSerial.disconnect();
		   },
	subscribeFailed: function() {
				 alert("ارتباط قطع شد");
			 }
};
