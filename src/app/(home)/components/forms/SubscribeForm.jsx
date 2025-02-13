"use client"

import { useActionState } from "react";
import { submitSubscription } from "../../_actions/notifications"
import { cn } from "../../../../lib/utils";

const initialState = {
    message: null,
    type: null
};

export default function SubscribeForm() {
    const [state, formAction, pending] = useActionState(submitSubscription, initialState);

    return (
        <form action={formAction} className='flex flex-col gap-4'>
            {state?.message && <div className={cn(state.type == "error" ? "bg-red-100 text-red-800 border-red-800" : "bg-green-100 text-green-800 border-green-800", "w-full border-2 px-4 py-2 font-semibold")}>{state.message}</div>}
            <div className='flex gap-4 flex-wrap md:flex-nowrap justify-end'>
                <input type="text" name="fullName" id="fullName" required placeholder='Full name' className='w-full px-4 py-2 text-black' />
                <input type="email" name="email" id="email" required placeholder='Email address' className='w-full px-4 py-2 text-black' />
                <button type="submit" disabled={pending} className='bg-green-800 hover:bg-green-900 font-bold tracking-widest w-full md:w-fit text-white px-4 py-2'>{pending ? "Subscribing..." : "Subscribe"}</button>
            </div>
        </form>
    )
}