window.onload = function() {
	var config = {  
		apiKey: "AIzaSyDLCmGt8jbi8NcBTNosNCova9txARCJ1-Y",
		authDomain: "rescue-tech.firebaseapp.com",
		databaseURL: "https://rescue-tech.firebaseio.com",
		projectId: "rescue-tech",
		storageBucket: "",
		messagingSenderId: "63539586922"
	};
	firebase.initializeApp(config);
}
function signInOrg() {
    firebase.auth().signInWithEmailAndPassword(document.getElementById("orgEmail").value, document.getElementById("orgPass").value).then(function () {
        window.location.replace('organizations.html');
    }).catch(function (error) {
        document.getElementById("error").style.display = "block";
        document.getElementById("password").value = '';
        console.log("ERROR! " + error.code + " " + error.message);
    });
}
