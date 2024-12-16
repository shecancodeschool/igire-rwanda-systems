'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function ProgressBarProvider({ children }) {
    return (
        <>
            {children}
            <ProgressBar
                height="5px"
                color="green"
                options={{ showSpinner: true }}
                shallowRouting
            />
        </>
    );
}