/*
* --------------------------------
* Fja osnovna jedinica apstrakcije
* --------------------------------
*/

// Ex 1 - problem
function parseAge(age) {
	if (!_.isString(age)) throw new Error("Expecting a string");

	console.log("Attempting to parse an age");

	var a = parseInt( age, 10);

	if (_.isNaN(a)) {
		console.log(["Could not parse age:", age]. join(' '));
		a = 0;
	}
	return a;
}

// Ex 1 - rjesenje
function fail(thing) {
	throw new Error(thing);
}

function warn(thing) {
	console.log(["WARNING:", thing]. join(' '));
}

function note(thing) {
	console.log(["NOTE:", thing]. join(' '))
}

// Ex 1 - kompletno
function parseAge(age) {

	if (!_.isString(age)) {
		fail("Expecting a string");
	}

	var a;
	note("Attempting to parse an age");

	a = parseInt(age, 10);

	if (_.isNaN(a)) {
		warn(["Could not parse age:", age]. join(' ')); a = 0;
	}
	return a;
}

/*
* -------------------------
* First class FNs, Closures
* -------------------------
*/
