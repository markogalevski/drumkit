
window.addEventListener('keydown', play_sound_key);


function play_sound_worker(keycode) {
	const audio = document.querySelector(`audio[data-key="${keycode}"]`);
	const key = document.querySelector(`.key[data-key="${keycode}"]`);
	if (!audio) {
		return;
	}
	humanise(audio)
	audio.play();
	key.classList.add('playing');
	
}

function play_sound_key(e) {
	play_sound_worker(e.key);
}

function humanise(audio) {
	audio.currentTime = Math.random() * 0.04
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
	
	key.addEventListener('transitionend', remove_transition);
	key.addEventListener('click', play_sound_click);
});

function play_sound_click(e) {
	play_sound_worker(e.target.getAttribute('data-key'));
}

function remove_transition(e) {
	if (e.propertyName != 'transform') return;
	this.classList.remove('playing');
}
