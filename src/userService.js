// angular.module( `es6Day` )
// .factory( `userService`, function() {
// 	let userData = {};
// 	return {
// 		// METHOD TO CREATE OBJECT
// 		// SAVE OBJECT SOMEWHERE WE HAVE ACCESS TO
// 		// RETURN OBJECT TO ROOTCTRL
// 		createUser( username, email, password ) {
// 			userData = {
// 				username,
// 				email,
// 				password
// 			}

// 			return userData;
// 		}
// 	}
// } );

class UserService {
	constructor() {
		this.userData = {};
	}

	createUser( username, email, password ) {
		this.userData = {
				username,
				email,
				password
			}
		return this.userData;
	}
}

angular.module( `es6Day` )
.service( `userService`, UserService );