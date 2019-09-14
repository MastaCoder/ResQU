window.onload = function () {
    var config = {
        apiKey: "AIzaSyDLCmGt8jbi8NcBTNosNCova9txARCJ1-Y",
        authDomain: "rescue-tech.firebaseapp.com",
        databaseURL: "https://rescue-tech.firebaseio.com",
        projectId: "rescue-tech",
        storageBucket: "",
        messagingSenderId: "63539586922"
    };
    firebase.initializeApp(config);
    //verifyLoggedIn();
    loadDisasters();
};

function submit() {
    var select = document.getElementById("disaster_list");

    var id = select.options[select.selectedIndex].dataset["id"];
    
    // convert factors into severity score


    firebase.database().ref("disasters/" + id + "/traps").push({
        name: document.getElementById("name").value,
        kids: document.getElementById("kids").value,
        adults: document.getElementById("adults").value,
        other: document.getElementById("other").value,
        emergency: document.getElementById("emerg").checked,
        loc: document.getElementById("loc").value,
        shelter: document.getElementById("condition").value,
        severity: document.getElementById("sev").value,
        assigned: ""
    });


}


function reduceOptions(inputID, listID) {
    var input = document.getElementById(inputID);
    var filter = input.value.toUpperCase();
    var ul = document.getElementById(listID);
    var li = ul.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        var itemText = li[i].innerText;
        if (itemText.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function loadDisasters() {
    var optNum = 0;
    var list = document.getElementById("disaster_list");
    firebase.database().ref("disasters").once("value", function (object) {
        object.forEach(function (value) {
            console.log(value.val().name);
            var opt = document.createElement('option');
            opt.dataset['id'] = Object.keys(object.val())[optNum];
            opt.setAttribute("class", "list-group-item list-group-item-action py-2 text-dark");
            opt.innerHTML = value.val()["name"];
            opt.setAttribute("onclick", "document.getElementById('disaster_button').innerHTML = '" + value.val()["name"] + "'; document.getElementById('disaster_button').dataset['id'] = '" + Object.keys(object.val())[optNum] + "';");
            list.appendChild(opt);
            optNum += 1;
        });
    });
}


