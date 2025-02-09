"use client";

import { useActionState } from "react";
import { submitContactUs } from "../../_actions/notifications";
import { cn } from "../../../../lib/utils";

const initialState = {
    message: null,
    type: null
};
export default function ContactForm() {
    const [state, formAction, pending] = useActionState(submitContactUs, initialState);
    return (
        <form action={formAction} className="flex flex-col items-center justify-center w-full bg-orange-200 p-8 md:p-16">
            {state?.message && <div className={cn(state.type == "error" ? "bg-red-100 text-red-800 border-red-800" : "bg-green-100 text-green-800 border-green-800", "w-full border-2 px-4 py-2 font-semibold mb-4")}>{state.message}</div>}
            <input type="text" name="fullName" id="fullName" required className="w-full border border-black px-3 py-2 mb-4" placeholder="Full name" />
            <input type="email" name="email" id="email" required className="w-full border border-black px-3 py-2 mb-4" placeholder="Email" />
            <textarea name="message" id="message" className="w-full border border-black px-3 py-2 mb-4" rows={'6'} placeholder="Message"></textarea>
            <button type="submit" disabled={pending} className='bg-green-800 hover:bg-green-900 font-bold tracking-widest w-full text-white px-4 py-2'>{pending ? "Submitting..." : "Send"}</button>
        </form>
    )
}
