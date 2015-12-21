
function addLoadEvent(func)
{    						
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


function insertAfter(newElement,targetElement)
{
	var parent=targetElement.parentNode;
	if (parent.lastChild==targetElement) 
	{
		parent.appendChild(newElement);
	}
	else
	{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

addLoadEvent(preparePlaceholder());

function preparePlaceholder()
{
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imageGallery")) return false;
			
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("class","img-thumbnail");
	placeholder.setAttribute("src","public/picture/001.jpg");
	placeholder.setAttribute("alt","My Image Gallery");
			
	var desp=document.createElement("p");
	desp.setAttribute("id","p1");
	var txt=document.createTextNode("Chose A Picture");
	desp.appendChild(txt);
			
	gallery=document.getElementById("imageGallery");
	gallery.parentNode.insertBefore(placeholder,gallery);
	insertAfter(desp,placeholder);
}

addLoadEvent(prepareGallery);

function prepareGallery()
{
	if(!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById("imageGallery")) return false;

	var gallery=document.getElementById("imageGallery");
	var links=gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) 
	{
		links[i].onclick=function()
		{
			showpic(this);
			return false;
			
		}
		links[i].onkeypress=links[i].onclick;			

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
	
	if (document.getElementById("p1")) 
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


		



