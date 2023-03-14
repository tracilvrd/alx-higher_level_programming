#!/usr/bin/node
module.exports = class Square extends require('./5-square.js') {
<<<<<<< HEAD
  charPrint (c) {
    if (c === undefined) {
	    this.print();
    } else {
	    for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
	    }
=======
    charPrint (c) {
	if (c === undefined) {
	  this.print();
	} else {
	  for (let i = 0; i < this.height; i++) {
		console.log(c.repeat(this.width));
	   }
	}
>>>>>>> 88ef665b5ab79af32882bba079e87583d8f26f79
    }
  }
};
