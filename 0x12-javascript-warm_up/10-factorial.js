#!/usr/bin/node
function factorial(num) {
    if (isNan(num)) {
	return 1;
    } else if (num <= 1) {
	return 1;
    } else {
	return num * factorial(num - 1);
    }
}

const input = parseInt(process.argv[2]);
console.log(factorial(input));

