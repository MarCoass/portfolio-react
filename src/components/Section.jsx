import React from "react";

export default function Section({ titulo, children, id }) {
  return (
    <div
      id={id}
      className="min-h-[400px] my-10 bg-rose-50 border border-1.5 border-rose-400 rounded-2xl dark:border-rose-600 dark:bg-rose-950  dark:text-white flex flex-col justify-center align-middle py-5 px-5 sm:px-20 "
    >
      {children}
    </div>
  );
}
