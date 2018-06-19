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
        type: [{type: String, required: [true, "type is required"]}],
        photo: {
            type: String
        },
        price: {
            type: Number
        },
        rating: {
            type: Number
        },
        experience: {
            type: Number
        },
        status: {
            type: String
        },
        reviews: [{
            date: {
                type: String,
                required: [true, "review date is required"]
            },
            text: {
                type: String,
                required: [true, "review text is required"]
            },
            rating: {
                qualification: {
                    type: Number,
                    required: [true, "review rating is required"]
                },
                price: {
                    type: Number,
                    required: [true, "review rating is required"]
                },
                attention: {
                    type: Number,
                    required: [true, "review attention is required"]
                },
            },
        }],
        records: [
            {
                date: {
                    type: String,
                    required: [true, "date is required"]
                },
                time: [{
                    type: String,
                    required: [true, "time is required"]
                }]

            }
        ],
        clinics: [{
            type: Schema.Types.ObjectId
        }],
        laboratories:
            [{
                type: Schema.Types.ObjectId
            }],
        diagnosticCenters:
            [{
                type: Schema.Types.ObjectId
            }]
    },
    {
        collection: 'Doctors'
    }
    )
;

const Doctor = mongoose.model('Doctor', DoctorSchema);

export default Doctor;