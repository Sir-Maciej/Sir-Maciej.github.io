window.onload = function()
{		

var button = document.getElementById("upDiv");


button.onclick=function()
{
	window.scrollBy(0,(-1)*pageYOffset);
	
};

window.onscroll = function(e)
{

	if(pageYOffset>500)
	{
		button.style.display="block";
	}
	else
		button.style.display="none";
}





}

