var time = new Date().getHours();

if (time > 18) {
	document.getElementById("particles-js").style.backgroundImage = 'url(../images/night-tree-bg.jpg)';


} else {
document.getElementById("particles-js").style.backgroundImage = 'url(../images/day-tree-bg.jpg)';
}
