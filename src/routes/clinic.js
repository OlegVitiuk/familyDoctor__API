import express from 'express';
import Clinic from "@models/Clinic";

export const clinicRouter = express.Router();

clinicRouter.get('/getAll', (req, res, next) => {
    Clinic.find().then(data => res.send(data)).catch(next);
});

