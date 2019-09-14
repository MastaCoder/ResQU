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
// function createUser(){
// 	var email = document.getElementById("orgEmail").value;
// 	var password = document.getElementById("orgPass").value;
// 	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
// 		var errorCode = error.code;
// 		var errorMessage = error.message;
// 	});
// 	firebase.auth().onAuthStateChanged(function(user) {
// 		if(user){
// 			var name = document.getElementById("orgName").value;
// 			var email = document.getElementById("orgEmail").value;
// 			var ownername = document.getElementById("ownerName").value;
// 			if(email == null){
// 				return;
// 			}
// 			var uid = user.uid; 
// 			writeUserData(name, ownername, email, uid);
// 			document.getElementById("orgName").value="";
// 			document.getElementById("orgEmail").value="";
// 			document.getElementById("orgPass").value="";
// 			document.getElementById("ownerName").value="";
// 		}
// 	});	
// }
function createUser() {
	var config = {  
		apiKey: "AIzaSyDLCmGt8jbi8NcBTNosNCova9txARCJ1-Y",
		authDomain: "rescue-tech.firebaseapp.com",
		databaseURL: "https://rescue-tech.firebaseio.com",
		projectId: "rescue-tech",
		storageBucket: "",
		messagingSenderId: "63539586922"
	};
	var secondaryApp = firebase.initializeApp(config, "creation");
	secondaryApp.auth().createUserWithEmailAndPassword(document.getElementById("orgEmail").value, document.getElementById("orgPass").value).then(function (user) {
		secondaryApp.auth().signOut();
		console.log(user.user.uid);
		var name = document.getElementById("orgName").value;
			var email = document.getElementById("orgEmail").value;
			var ownername = document.getElementById("ownerName").value;
			var disaster = document.getElementById("disasterName").value;
			var orgName = document.getElementById("dorgName").value;
			var location = document.getElementById("disasterLocation").value;
			var bcLocation = document.getElementById("bcLocation").value;
			if(email == null){
				return;
			}
			document.getElementById("orgName").value="";
			document.getElementById("orgEmail").value="";
			document.getElementById("orgPass").value="";
			document.getElementById("ownerName").value="";
			document.getElementById("disasterName").value="";
			document.getElementById("dorgName").value="";
			document.getElementById("disasterLocation").value="";
			document.getElementById("bcLocation").value="";
		firebase.database().ref("disasters/" + user.user.uid).set({
			name: name,
			email: email,
			owner_name: ownername,
			disaster_name: disaster,
			org_name: orgName,
			location: location,
			Base_Camp_Location: bcLocation
		});
		toastr.success("Disaster made successfully");
	}).catch(function (e) {
		console.log("ERROR! " +
			e.code + " " +
			e.message);
	});
}

