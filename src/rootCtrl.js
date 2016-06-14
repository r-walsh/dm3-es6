angular.module( `es6Day` )
.controller( `rootCtrl`, function( $scope, userService ) {

	$scope.submit = ( email, password, username = `user#999` ) => {
		$scope.user = userService.createUser( username, email, password );
	}

} );





// function Car( make, model ) {
// 	this.make = make;
// 	this.model = model;
// }

// var civic = new Car( "Honda", "Civic" );

// class Car {
// 	constructor( make, model ) {
// 		this.make = make;
// 		this.model = model;
// 	}
// }


class Person {
	constructor( firstName, lastName, age ) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	logFullName() {
		console.log( `${ this.firstName } ${ this.lastName }` );
	}
}

// function Person( firstName, lastName, age ) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.age = age;

// 	this.logFullName = function() {
// 		// log the name
// 	}
// }

class Baby extends Person {
	constructor( firstName, lastName, age ) {
		super( firstName, lastName, age )
	}

	cry() {
		console.log( `WAAAAAAAH` );
	}
}

const liam = new Baby( `liam`, `walsh`, 1 );
console.log( liam );
liam.logFullName();