import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    surname: {
        type: String,
        required: [true, "surname is required"]
    },
    middleName: {
        type: String,
        required: [true, "middleName is required"]
    },
    type: [{type: String,required: [true, "type is required"]}],
    photo: {
        type: String
    },
    price: {
        type: Number
    },
    rating: {
        type: Number
    },
    clinics: [{
        type: Schema.Types.ObjectId
    }],
    laboratories: [{
        type: Schema.Types.ObjectId
    }],
    diagnosticCenters: [{
        type: Schema.Types.ObjectId
    }]
}, {collection: 'Doctors'});

const Doctor = mongoose.model('Doctor', DoctorSchema);

export default Doctor;