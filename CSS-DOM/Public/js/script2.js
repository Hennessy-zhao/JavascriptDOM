addLoadEvent(stripeTables());

//*************************************************根据需求重复设置某种样式
function stripeTables()
{
	if(!document.getElementsByTagName)return false;
	if (!document.getElementsByTagName("table"))return false;
	var tables=document.getElementsByTagName("table");
	var odd,rows;
	for (var i = 0; i < tables.length; i++) {
		odd=false;
		rows=tables[i].getElementsByTagName("tr");
		for (var j = 0; j < rows.length; j++) {
			if (odd=true) 
			{
				rows[j].style.backgroundColor="#ffc";
				odd=false;
			}
			else
			{
				odd=true;
			}
		}
	}
}


//***************************************************响应事件
//********************8通过使用onmouseover事件改编鼠标悬停在上面时的样式
addLoadEvent(highlightRows());
function highlightRows()
{
	if(!document.getElementsByTagName)return false;
	if (!document.getElementsByTagName("tr"))return false;
	var rows=document.getElementsByTagName("tr");
	for (var i = 0; i < rows.length; i++) {
		rows[i].onmouseover=function()
		{
			this.style.fontWeight="bold";
		}
		rows[i].onmouseout=function()
		{
			this.style.fontWeight="normal";
		}
	};
}


//*****************************8也可以通过className属性来改编元素的class名称用法：elem.className=...