function initDataValues()
{
	BlueDevMacAdr="20:15:05:06:65:16";
	MicroDataSize=20;
	MicroData=[];
	XAxis=[];
	for(var i=0; i<MicroDataSize; i++)
	{
		XAxis[i]=i+1;
		MicroData[i]=Math.random()*50+40;
	}
}
