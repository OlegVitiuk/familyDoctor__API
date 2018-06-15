import express from 'express';
import Doctor from "@models/Doctor";

export const doctorRouter = express.Router();

doctorRouter.get('/getAll', (req, res, next) => {
    Doctor.find().then(data => res.send(data)).catch(next);
});

doctorRouter.post('/getTimeSheet', (req, res, next) => {
    const {date, id} = req.body;
    Doctor.findById(id).then(data => {
        const correctFormatDate = date.split('.').join('_');
        const timeSheet = data.records[correctFormatDate];
        res.status(200).send(timeSheet);
    }).catch(next);
});

