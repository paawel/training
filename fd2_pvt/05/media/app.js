(function(){
	let wrapper = document.getElementById('wrapper');
	let wrapper1 = document.getElementById('wrapper1');

	let returnObjectFromJSONRequest = url => {
		let request = new XMLHttpRequest();
		let output = {};
		request.open('GET', url, false);
	debugger;
		request.send();
	debugger;
		if (request.status === 200) {
			return output = JSON.parse(request.response);
		}
		return output;
	};

	btn.onclick = () => {
		let fromInternet = returnObjectFromJSONRequest('https://jsonplaceholder.typicode.com/posts');
		let fromLocalDir = returnObjectFromJSONRequest('./colors.json');
		wrapper.innerHTML = '<div> Text from data is: ' + fromInternet[0].body + '</div>';
		wrapper1.innerHTML = '<div> First color from data is: ' + Object.keys(fromLocalDir)[0] + '</div>';
	};
})();