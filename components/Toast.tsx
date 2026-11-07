
"use client";

import { CheckIcon, CrossIcon } from "@/app/assets/icons";
import Button from "./UI/Button";
import { useState, useEffect } from "react";

export default function Toast({ message, type }: { message?: string; type: string }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const icon: any = {
    success: <CheckIcon className="bg-green-500 w-7 h-7 text-white p-0.5 rounded-full" />,
    error: <CrossIcon className="bg-red-500 w-7 h-7 text-white p-0.5 rounded-full" />,
    info: (
      <div className="bg-blue-500 w-7 h-7 text-white p-0.5 rounded-full flex justify-center items-center">
        <span className="translate-y-0.5">i</span>
      </div>
    )
  };

  const style: any = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  function close() {
    setIsOpen(false);
  }

  useEffect(() => {
    const timer = setTimeout(close, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    isVisible && (
      <div
        className={`fixed top-20 left-10 ${
          isOpen
            ? "animate-[toastEnter_0.1s_ease-out_forwards]"
            : "animate-[toastExit_0.1s_ease-in_forwards]"
        }`}
      >
        <div className="rounded-lg relative px-3 flex gap-2 items-center shadow-md py-2 h-20 bg-white z-999999">
          <div className={`absolute left-0 top-0 bottom-0 w-2 rounded-l-lg ${style[type]}`} />

          <Button
            className="p-0.5 hover:bg-gray-200/70 rounded-md transition-colors hover:cursor-pointer"
            onClick={close}
          >
            <CrossIcon className="w-6 h-6" />
          </Button>

          {message}
          {icon[type]}
        </div>
      </div>
    )
  );
}
