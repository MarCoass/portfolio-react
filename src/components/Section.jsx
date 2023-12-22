import React from "react";


export default function Section({titulo, children}) {
    return (
        <div className="my-10 dark:bg-gray-600 dark:text-white ">
            <h2 className="text-2xl">{titulo}</h2>
           {children}
        </div>
    )
}