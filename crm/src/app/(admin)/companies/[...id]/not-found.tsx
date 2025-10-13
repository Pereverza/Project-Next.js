import Link from "next/link";
import React from "react";

export interface NotFountProps{

}

export default function NotFount({ }: NotFountProps) {
    return (
        <div>
            <p>Could not found components</p>
            <Link href="/companies" className="text-blue-500">
                Go back to companies
            </Link>
        </div>
    );
}