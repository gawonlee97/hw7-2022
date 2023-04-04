var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("play video")
	video.play()
	var vol = document.querySelector("#volume")
	vol.textContent = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow down!")
	video.playbackRate = video.playbackRate * 0.9
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("faster!")
	video.playbackRate = video.playbackRate / 0.9
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip")
	video.currentTime += 10
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("current location: " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute / unmute")
	var button = document.querySelector("#mute")
	if (video.muted == false){
		video.muted = true
		button.textContent = "Unmute"
	}
	else {
		video.muted = false;
		button.textContent = "Mute";
	}
	});

	document.querySelector("#slider").addEventListener("change", function() {
		console.log("volume slider")
		video.volume = this.value / 100
		var vol = document.querySelector("#volume")
		vol.textContent = video.volume * 100 + "%"
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		console.log("lets go old school")
		video.classList.add("oldSchool")
	});

	document.querySelector("#orig").addEventListener("click", function() {
		console.log("lets go back")
		video.classList.remove("oldSchool")
	});
