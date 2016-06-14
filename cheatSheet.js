// LET AND CONST

{
	// BLOCK SCOPED
	let test = "A thing";
	const testTwo = "Another thing";
}
// console.log( test, testTwo ); // UNDEFINED

for ( let i = 0; i < 10; i++ ) {
	// console.log( i );
}

// console.log( i ); // UNDEFINED

const name = "Ryan";
// console.log( name );
// name = "Zach";

const person = {
	firstName: "Ryan",
	lastName: "Walsh"
};

person.firstName = "Zach";


// STRING LITERALS / TEMPLATE STRINGS

const firstName = `Ryan`;
const lastName = `Walsh`;
const fullName = `${ firstName } ${ lastName }`
/* ES5
var fullName = name + " " + lastName;
*/
console.log( fullName );
console.log( `I can do math! See: ${ 4 * 129 }` );

/* ES5
var multiLine = "Hi \n" +
"Im \n" +
"multiLine"
*/

const multiline = `this
is
totally
fine
`

/* THIS BREAKS
const thisWillBreak = {
	`background-color`: `Blue`
};
*/

/////// OBJECTS ////////

/* ES5
function makePerson( name, age ) {
	return {
		name: name,
		age:age,
		lovesEs6: true
	}
}
*/

function makePerson( name, age ) {
	return {
		name,
		age,
		lovesEs6: true
	}
}


// DYANMIC OBJECT KEYS
const prefix = `isDynamic`
const myObject = {
	[ `thisIsDynamic` ]: true,
	[ prefix ]: true
};

console.log( myObject.thisIsDynamic );
console.log( myObject.isDynamic );

// OBJECT METHOD SHORTHAND

var testObject = {
	myMethod: function( param ) {
		console.log( param );
	}
}
console.log( testObject.myMethod( "Hello!" ) );

var testObject = {
	myMethod( param ) {
		console.log( param );
	},
	anotherProperty: 1,
	anotherMethod() {
		// does stuff
	}
}
console.log( testObject.myMethod( "Hello!" ) );

// ASSIGNMENT DESTRUCTURING

const personTwo = {
	fName: `Ryan`,
	lastName: `Walsh`
};

/* ES5
var firstName = personTwo.firstName;
*/

const { fName } = personTwo;
console.log( fName ); // === `Ryan`

const mentors = [ `Zach`, `Joseph`, `Geordyn` ];

const [ a, b, c ] = mentors;
console.log( a );


/////// ARRAYS ////////

// SPREAD OPERATOR

console.log( ...[ 1, 2, 3, 4, 5 ] );
/* ES5
console.log().apply( null, [ 1, 2, 3, 4, 5 ] )
*/

// console.log( 1, 2, 3, 4, 5 );

const oneThruFive = [ 1, 2, 3, 4, 5 ];
const nineThruEleven = [ 9, 10, 11 ];
const oneThruEleven = [ ...oneThruFive, 6, 7, 8, ...nineThruEleven ];

//////// FUNCTIONS ////////

/* ES5
function lotsaArgs( firstParam ) {
	console.log( firstParam );
	for ( var i = 1; i < arguments.length; i++ ) {
		console.log( arguments[ i ] );
	}
}

lotsaArgs( 1, 'a', 44, 'b' );
*/

// REST PARAMS

function lotsaArgs( firstParam, ...rest ) {
	console.log( firstParam );
	for ( let i = 0; i < rest.length; i++ ) {
		console.log( i );
	}
}

// DEFAULT PARAMS

/* ES5
function handleFormSubmit( name, email, password ) {
	if ( !name ) {
		name = "";
	}

	return {
		name: name,
		email: email,
		password: password
	}
}
*/

function handleFormSubmit( email, password, name = `` ) {
	return {
		name,
		email,
		password
	}
}


// ARROW FUNCTIONS

/* ES5
var newArr = [ 1, 2, 3, 4, 5 ].map( function( item, index, array ) {
	return item * 2;
} );
*/

const newArr = [ 1, 2, 3, 4, 5 ].map( ( item, index, array ) => {
	return item * 2;
} );

// Implicit Return
const newArrTwo = [ 1, 2, 3, 4, 5 ].map( ( item, index, array ) => item * 2 );

// const myFunction = () => {

// }

function myFunction() {
	
}