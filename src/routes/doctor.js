import express from 'express';
import Doctor from "@models/Doctor";
import User from "@models/User";
import config from '@utils/config';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

export const doctorRouter = express.Router();

const getCorrectFormatForDate = (date) => {
    return date.split('.').join('_');
}

doctorRouter.get('/getAll', (req, res, next) => {
    Doctor.find().then(data => res.send(data)).catch(next);
});

doctorRouter.post('/getAppoinments', (req, res, next) => {
    const {date, id} = req.body;
    Doctor.findById(id).then(data => {
        const timeSheet = data.records.map((item) => item.date === date ? item.time : null);
        res.status(200).send(timeSheet);
    }).catch(next);
});

doctorRouter.post('/addAppoinment', (req, res, next) => {
    const {token, data} = req.body;
    if (token && jwt.verify(token, config.jwtSecret)) {
        const userCredentials = jwt.decode(token);
        const updateUserRecords = User.findOneAndUpdate(
            {_id: userCredentials.id},
            {
                $push: {
                    records: data
                }
            }
        );
        const createDoctorRecordsDates = Doctor.findOneAndUpdate(
            {
                _id: data.doctorId,
            },
            {
                $push: {
                    records: {
                        date: data.date,
                        time: data.time
                    }
                }
            }
        );
        Promise.all([updateUserRecords, createDoctorRecordsDates]).then(() => {
            res.status(200).send({"status": "OK"});
            next();
        }).catch(next);
    } else {
        res.status(403).send({"error": "User is not authorized!"});
        next();
    }
});
