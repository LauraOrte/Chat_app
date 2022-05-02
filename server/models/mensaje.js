const{ Schema, model, SchemaTypes } = require('mongoose');

const MensajeSchema = new Schema({

    de: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    para: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
    },{
        timestamps: true
   
});

MensajeSchema.method('toJSON', function() {
    const { __v, password, ...object } = this.toObject();
    return object;
});

module.exports = model('Mensaje', MensajeSchema);