function travel()
{
	
}

function flyhigh(id)
{
	var position=document.getElementById("bird").style.top;
	document.getElementById("bird").style.top=position;
	document.getElementById("bird").style.top="150px";
}

function flylow(id)
{
	document.getElementById("bird").style.top="300px";
}