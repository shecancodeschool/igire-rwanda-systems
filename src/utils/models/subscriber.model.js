import mongoose, { Schema, models } from "mongoose";
const SubscriberSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        match: [/^[a-zA-Z\s]+$/, "Please enter a valid full name"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address"]
    }
}, {
    timestamps: true
});

const Subscriber = models?.Subscriber || mongoose.model("Subscriber", SubscriberSchema);
export default Subscriber;