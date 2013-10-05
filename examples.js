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



/*
 * -------------------------
 * High Order Functions
 * -------------------------
 */


// functions that take other functions

var plucker = function( attr ) {
	return function(obj) {
		return (obj && obj[attr]);
	};
}

var finder = function( valueFun, bestFun, coll ) {
	return _.reduce(coll, function( best, current ) {
		var bestValue = valueFun(best);
		var currentValue = valueFun(current);		
		return (bestValue === bestFun(bestValue, currentValue)) ? best : current;
	});
}

var people = [{name: "Ivica", age: 54}, {name: "Marica", age: 18}];

//run: finder( plucker('age'), Math.max, people);


// functions that return other functions

var always = function( value ) {
	return function() {
		return value;
	}
}

var checker = function( /* validators */ ) {
	var validators = _.toArray( arguments );
	return function( obj ) {
		return _.reduce( validators, function( errs, check ) {
			if ( check(obj) )
				return errs
			else
				return _.chain( errs ).push( check.message ).value();
		}, []);
	}
}

function validator(message, fun) {
	var f = function(/* args */) {
		return fun.apply(fun, arguments);
	};
	f['message'] = message;
	return f;
}

//run: var gonnaFail = checker(validator("ZOMG!", always(false)));
//run: gonnaFail(100);
