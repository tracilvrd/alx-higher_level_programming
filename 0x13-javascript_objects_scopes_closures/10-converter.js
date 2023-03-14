#!/usr/bin/node
exports.converter = function (base) {
    return function (num) {
	return num = num.toString(base);
    }
};
