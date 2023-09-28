//your JS code here. If required.
let buttons=document.getElementsByClassName("btn");
let sound='';
for(let i=0;i<buttons.length;i++){
	buttons[i].addEventListener("click",(event)=>{
		let text=event.target.textContent;
		sound=new Audio(`./sound/${text}`);
		sound.play();
	})
}
let stop=document.getElementsByClassName("stop")[0];
stop.addEventListener("click",stopmusic);
function stopmusic() {
	sound.pause();
}