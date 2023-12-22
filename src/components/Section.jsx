import React from "react";


export default function Section({titulo, children}) {
    return (
        <div className="my-10 dark:bg-gray-600 dark:text-white flex flex-col justify-center align-middle py-5 px-20">
           {children}
        </div>
    )
}