const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    question:{
        type:String,
        required:[true, 'must include a firstName'],
        validate:{
            validator:(input) => {
                return input;
            },
            message: (input => `${input.value}`)
        }
    },
    option1:{
        type:String,
        required:[true, 'must include a firstName'],
        validate:{
            validator:(input) => {
                return input;
            },
            message: (input => `${input.value}`)
        }
    },
    option2:{
        type:String,
        required:[true, 'must include a firstName'],
        validate:{
            validator:(input) => {
                return input;
            },
            message: (input => `${input.value}`)
        }
    },
    option1Vote:{
        type:Number,
    },
    option2Vote:{
        type:Number,
    }

});

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;