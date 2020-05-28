const signOut = document.getElementById('logout');
logout.addEventListener('click', function () {
	firebaseConfig1
		.auth()
		.signOut()
		.then(function () {
			window.location.href = '../index.html';
			// Sign-out successful.
		})
		.catch(function (error) {
			// An error happened.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorMessage);
		});
});
