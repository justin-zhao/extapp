let su=document.getElementById("su"); 
su.value = "My Search"; 
let kw=document.getElementById("kw"); 
kw.value = "Chrome Extension App"; 
su.onclick= function() { 
	let today = new Date(); 
	alert("My search\n" + "date:" + today.toString()); 
}; 
function myInterval() { 
	su.click(); 
	//alert("Hello, Test");
} 

setInterval("myInterval()",5000);
