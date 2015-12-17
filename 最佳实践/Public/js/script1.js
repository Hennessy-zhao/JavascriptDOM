window.onload=onclick1;

function onclick1()
{											//对象检测，如果说此浏览器不支持js中的dom操作，也不会给网页的显示带来一些障碍
	if (!document.getElementsByTagName||!document.getElementById) 		//注意：对象检测的时候必须把方法的()去掉，否则无效
	{
		return false;
	}
	var links=document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		if (links[i].getAttribute("class")=="a1") 
		{
			links[i].onclick=function()
			{
				PopUp(this.getAttribute("href"));
				return false;
			}
		}
	}
}


function PopUp(site)
{
	window.open(site,"百度相关网页","width=800,height=800");
}