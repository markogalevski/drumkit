window.addEventListener('keydown', play_sound);

function play_sound(e) {
	const audio = document.querySelector(`audio[data-key="${e.key}"]`);
	const key = document.querySelector(`.key[data-key="${e.key}"]`);
	console.log(key);
	if (!audio) {
		return;
	}
	humanise(audio)
	audio.play();
	key.classList.add('playing');
	
}

function humanise(audio) {
	audio.currentTime = Math.random() * 0.04
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
	
	key.addEventListener('transitionend', remove_transition);
});

function remove_transition(e) {
	if (e.propertyName != 'transform') return;
	this.classList.remove('playing');
}
