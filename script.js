const audio = document.getElementById('audio');
let currentSound = null;

function playSound(soundFileName) {
    if (currentSound) {
        stopSound();
    }

    audio.src = `./sounds/${soundFileName}`;
    audio.play();
    currentSound = soundFileName;
}

function stopSound() {
    audio.pause();
    audio.currentTime = 0;
    currentSound = null;
}
