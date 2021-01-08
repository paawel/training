var appUl = document.createElement('ol');
var appContainer = document.getElementById('app');
var appDataContainer = document.getElementById('data');
var data = [];

function showList() {
    clearList();
    fillData();
}

function createList(data) {
    var i = 0,
        textnode,
        appLi;
    for(; i< data.length; i++) {
        appLi = document.createElement("li")
        textnode = document.createTextNode(data[i]);
        appLi.appendChild(textnode);
        appUl.appendChild(appLi);
    }

    appContainer.appendChild(appUl);
}

function fillData() {
    if(appDataContainer.innerText) {
        data = appDataContainer.innerText.split(',');
        createList(data);
    } else {
        alert('No data found');
    }
}

function decorList() {
    appUl.classList.add("list-decor");
}

function clearList() {
    removeDecor();
    appUl.innerHTML = '';
}

function removeDecor() {
    appUl.classList.remove("list-decor");
}
