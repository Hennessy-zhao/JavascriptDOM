
preview=document.getElementById("preview");

prepareChange(preview);

function prepareChange(preview)
{
	item=preview;
	item.style.position="absolute";
	item.style.left="0px";			
	setTimeout("change1(item,0)",100);

}
function change1(item,star)
{
	preview=item;
	end=star-114;
	if (end>=-1000) 
	{
		preview.style.left=end+"px";
		setTimeout("change1(item,end)",100);
	}
	else
	{
		setTimeout("change1(item,114)",0);
	}
	
}
