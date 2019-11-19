window.onload = function (){
	var photo = document.getElementById("brazilphoto");
	photo.onclick=function(){
		photo.src="img/brazil2019/2.jpg";
	}
	var x = document.getElementsByTagName("DIV");
	for (i=0; i<x.length; i++){
		x[i].style.color="rgb(225, 6, 0)";
	}
	x[3].onclick=function(){
		var img = document.createElement("IMG");
		img.src="img/cars/ferrari.jpg";
		img.style.width="45%";
		img.style.padding="30px";
		document.body.appendChild(img);
		img.onclick=function(){
			img.remove();
		}
	}
}