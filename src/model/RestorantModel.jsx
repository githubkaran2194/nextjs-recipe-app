import mongoose, { Mongoose } from "mongoose";

const restorantModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

export const restorantSchema = mongoose.models.restorants || mongoose.model('restorants', restorantModel)