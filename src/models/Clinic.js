import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const workTime = {
    start: {
        type: String,
        required: [true, "start is required"],
    },
    end: {
        type: String,
        required: [true, "end is required"]
    }
};

const ClinicSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    logoImage: {
        type: String,
    },
    photos: [{
        type: String
    }],
    destination: {
        type: String
    },
    infrastructure: [{
        name: {
            type: String,
            required: [true, "name of infrastructure service is required"]
        },
        link: {
            type: String,
            required: [true, "link of infrastructure service is required"]
        }
    }],
    description: {
        type: String
    },
    doctors: [{
        type: Schema.Types.ObjectId,
        required: [true, "doctor is required"]
    }],
    site: {
        type: String,
    },
    schedule: {
        weekdays: workTime,
        weekends: workTime
    },
    records: [{
        clientId: {
            type: Schema.Types.ObjectId,
            required: [true, "clientId is required"]
        },
        doctorId: {
            type: Schema.Types.ObjectId,
            required: [true, "doctorId is required"]
        },
        time: {
            type: String,
            required: [true, "time is required"]
        },
        date: {
            type: Date,
            required: [true, "date is required"]
        }
    }],
    adress: {
        street: {
            type: String,
            required: [true, "street is required"]
        },
        metro: {
            type: String,
            required: [true, "metro is required"]
        }
    },
    reviews: [{
        author: {
            type: Schema.Types.ObjectId,
            required: [true, "author is required"]
        },
        text: {
            type: String,
            required: [true, "text is required"]
        }
    }],
    services: [{
        name: {
            type: String,
            required: [true, "service name is required"]
        },
        price: {
            type: Number
        }
    }]
}, {collection: 'Clinics'});

const Clinic = mongoose.model('Clinic', ClinicSchema);

export default Clinic;