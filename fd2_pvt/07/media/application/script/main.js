let inputs = document.getElementsByClassName('form-item__input'),
	form = document.getElementsByClassName('form')[0];

Object.keys(inputs).forEach(i => {
	inputs[i].addEventListener('input', e => {
		if(e.srcElement.value.length > 0) {
			e.srcElement.nextSibling.nextElementSibling.style.display = 'none';
		}
		if(e.srcElement.value.length === 0) {
			e.srcElement.nextSibling.nextElementSibling.style.display = 'block';
		}
	});
});

formRemover.addEventListener('click', () => {
	form.style.display = 'none';
});

formShow.addEventListener('click', () => {
	form.style.display = 'block';
});
