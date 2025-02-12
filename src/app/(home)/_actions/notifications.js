"use server";

import Contact from "../../../utils/models/contact.model";
import connectMongo from "../../../utils/database/ConnectToDB";
import { getErrorMessage } from "../../../utils/errorHandler";
import Subscriber from "../../../utils/models/subscriber.model";
import sendEmail from "../../../utils/sendEmail";
import { z } from "zod";

const SubscribeSchema = z.object({
    fullName: z.string().min(3, { message: "Full name must be at least 3 characters long" }).max(50).regex(/^[a-zA-Z\s]+$/),
    email: z.string().email({ message: "Please enter a valid email address" }),
});

const ContactSchema = z.object({
    fullName: z.string().min(3, { message: "Full name must be at least 3 characters long" }).max(50).regex(/^[a-zA-Z\s]+$/),
    email: z.string().email({ message: "Please enter a valid email address" }),
    message: z.string().min(4, { message: "Message must be at least 4 characters long" }).max(500),
});

export const submitSubscription = async (prevState, formData) => {
    const result = SubscribeSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!result.success) {
        let errorMessage = result.error.flatten().fieldErrors;
        errorMessage.type = "error";
        return errorMessage;
    }
    const { fullName, email } = result.data;
    try {
        await connectMongo();
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return {
                message: "You are already subscribed to our newsletter.",
                type: "error",
            };
        }
        const newSubscriber = new Subscriber({ fullName, email });
        await newSubscriber.save();
        // const response = sendEmail(email, "Welcome to IGIRE RWANDA ORGANIZATION", `Dear ${fullName},\n\nThank you for subscribing to our newsletter. We are excited to have you on board and look forward to sharing our latest updates with you.\n\nBest regards,\n\nIgire Rwanda Organization`);
        // console.log(response);
        // if (response.error) {
        //     console.log(response.error);
        // } else {
        //     console.log(response.message);
        // }
        return {
            message: "You have successfully subscribed to our newsletter.",
            type: "success",
        };
    } catch (error) {
        return {
            error: getErrorMessage(error),
        };
    }
}

export const submitContactUs = async (prevState, formData) => {
    const result = ContactSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!result.success) {
        let errorMessage = result.error.flatten().fieldErrors;
        errorMessage.type = "error";
        return errorMessage;
    }
    const { fullName, email, message } = result.data;
    try {
        await connectMongo();
        const newMessage = new Contact({ fullName, email, message });
        await newMessage.save();
        // const response = sendEmail(email, "Welcome to IGIRE RWANDA ORGANIZATION", `Dear ${fullName},\n\nThank you for subscribing to our newsletter. We are excited to have you on board and look forward to sharing our latest updates with you.\n\nBest regards,\n\nIgire Rwanda Organization`);
        // console.log(response);
        // if (response.error) {
        //     console.log(response.error);
        // } else {
        //     console.log(response.message);
        // }
        return {
            message: "Your message has been sent successfully. We will get back to you as soon as possible.",
            type: "success",
        };
    } catch (error) {
        return {
            error: getErrorMessage(error),
        };
    }
}