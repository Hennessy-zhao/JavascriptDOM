function addLoadEvent(func){    						//此函数详解见书82页共享onload事件
   	var oldonload=window.onload;
  	if(typeof (window.onload !='function'))
  	{
   		window.onload=func; 
 	}
 	else
 	{
   		window.onload=function()
   		{
    		oldonload(); 
    		func();
  		}
 	}
}
addLoadEvent(prepareGallery);

function prepareGallery()
{
	if(!document.getElementById)
	{
		return false;
	}
	if (!document.getElementsByTagName)
	{
		return false;
	}
	if (!document.getElementById("imageGallery")) 
	{
		return false;
	}

	var gallery=document.getElementById("imageGallery");
	var links=gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) 
	{
		links[i].onclick=function()
		{
			showpic(this);
			return false;
			// if (showpic(this)) 
			// {
			// 	return false;
			// }
			// else
			// {
			// 	return true;
			// }
		}
		links[i].onkeypress=links[i].onclick;			//最好不要使用onkeypress事件，因为虽然onclick是说与鼠标有关的事件，但是一般来说与键盘有关的事件也可以做到

	}
}

function showpic(whichpic)
{
	if (!document.getElementById("placeholder")) 
	{
		return false;
	}
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	if (placeholder.nodeName!="IMG")
	{
		return false;
	}
	placeholder.setAttribute("src",source);
	if (document.getElementById("title")) 
	{
		var p1=document.getElementById("p1");
		if (whichpic.getAttribute("title")) 
		{
			title=whichpic.getAttribute("title");
		}
		else
		{
			title="";
		}
		p1.firstChild.nodeValue=title;
	}
}

