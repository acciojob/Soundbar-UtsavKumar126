//your JS code here. If required.
let buttons=document.getElementsByClassName("btn");
const audio = document.getElementById('audio');
let sound=null;
for(let i=0;i<buttons.length;i++){
	buttons[i].addEventListener("click",(event)=>{
		if(sound){
			stopmusic();
		}
		audio.src=`./sounds/${event.target.textContent}`
		audio.play();
		sound=event.target.textContent
	})
}
let stop=document.getElementsByClassName("stop")[0];
stop.addEventListener("click",stopmusic);
function stopmusic() {
	audio.pause();
	audio.currentTime = 0;
    sound= null;
}