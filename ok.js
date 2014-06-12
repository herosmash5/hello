var a = document.getElementById("swag").value;
var ad = document.getElementById("swag").defaultvalue;
if(!a==ad)
{
var DATIME = (function(module)
{
	module.DoIt = function(resultObject)
	{
		resultObject.prepend(Date() + '<.< Your' + a + '<br />');
	};
	return module;
}(DATIME || {}));
}
else
{
	alert("Please put some SWAG.");
}
