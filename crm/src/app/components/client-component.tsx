
import React from 'react';
import {headers} from "next/headers";

export interface ClientComponentProps {
    children?: React.ReactNode;
}
export default function ClientComponent({children}: ClientComponentProps) {
    console.log("Server Component");
    console.log(headers());
    return (
        <div>
            <span>Client Component</span>

            {children}
        </div>
    );
}

