#!/usr/bin/node
exports.esrever = function (list) {
    return list.reduceRight(function (array, count) {
	array.push(count);
	return array;
    }, []);
};
