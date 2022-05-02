const { Schema, model } = require('mongoose');


const CanalSchema = new Schema({

    nombre: {
        type: String,
        minlength: 2,
        maxlength: 20,
    },
    type: {
        type: String,
    },
},{
    timestamps: true
});


CanalSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('Canal', CanalSchema );