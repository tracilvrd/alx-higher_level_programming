#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
<<<<<<< HEAD
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchElement) {
	    count++;
=======
    let count = 0;
    for (let i = 0; i < list.length; i++) {
	if (list[i] === searchElement) {
	  count++;
	}
>>>>>>> 88ef665b5ab79af32882bba079e87583d8f26f79
    }
  }
  return count;
};
