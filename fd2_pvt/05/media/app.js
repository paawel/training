(function(){

    var returnObjectFromJSONRequest = function(url) {
        var request = new XMLHttpRequest();
        var output = {};

        request.open('GET', url, false);
        request.send();

        if (request.status === 200) {
            return output = JSON.parse(request.response);
        }

        return output;
    };


    var fromInternet = returnObjectFromJSONRequest('https://jsonplaceholder.typicode.com/posts');
    var fromLocalDir = returnObjectFromJSONRequest('./node_modules/colors.json/colors.json');

    document.getElementById('wrapper').innerHTML = '<div> Text from data is: ' + fromInternet[0].body + '</div>';
    document.getElementById('wrapper1').innerHTML = '<div> First color from data is: ' + Object.keys(fromLocalDir)[0] + '</div>';
})();