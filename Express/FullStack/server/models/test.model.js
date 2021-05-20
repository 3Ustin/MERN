const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
	text: {
		type:String,
		required:[true, "must include a name"],
		validate:{
			validator: (input) => {
				return input.length >= 3;
			},
			message: (input) => `${input.value} is not 3 characters.`
			
		}
	},
	number1: {
		type:Number,
		required:[true, "must include a number"],
		validate:{
			validator: (input) => {
				return !(isNaN(input));
			},
			message: (input) => `${input.value} is not a number.`
			
		}
	},
	number2: {
		type:Number,
		required:[true, "must include a number"],
		validate:{
			validator: (input) => {
				return !(isNaN(input));
			},
			message: (input) => `${input.value} is not a number.`
			
		}
	},
	number3: {
		type:Number,
		required:[true, "must include a number"],
		validate:{
			validator: (input) => {
				return !(isNaN(input));
			},
			message: (input) => `${input.value} is not a number.`
			
		}
	},
	color: {
		type:String,
		required:[true, "must include a number"],
		validate:{
			validator: (input) => {
				return input.length >= 3;
			},
			message: (input) => `${input.value} is not length of 3.`
			
		}
	},
});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;