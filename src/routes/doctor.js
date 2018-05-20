import express from 'express';
import Doctor from "@models/Doctor";

export const doctorRouter = express.Router();

doctorRouter.get('/getAll', (req, res, next) => {
    Doctor.find().then(data => res.send(data)).catch(next);
});

