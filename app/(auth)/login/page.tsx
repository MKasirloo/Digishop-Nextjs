"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@/app/assets/icons";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input"

export default function Page() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isOK, setIsOK] = useState(false);

  function onPhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
    if(/^09\d{9}$/.test(e.target.value)) {
      setIsOK(true);
    }
    else {
      setIsOK(false);
    }
  }
  return (
    <div className="h-dvh w-full flex justify-center items-center">
      <div className="flex flex-col justify-between gap-5 w-100 h-100 p-5 border border-gray-300 rounded-lg max-sm:border-none max-sm:w-full">
        <div className="flex justify-center items-center relative mb-10">
          <Image width={100} height={40} src="/images/logo.png" alt="Logo" className="w-3/5" />
          <Link href="/" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500">
            <ChevronRightIcon className="w-10 h-10 max-sm:w-7.5 max-sm:h-7.5" />
          </Link>
        </div>
        <div>
          <div className="mb-4">
            <p>
              ورود یا ثبت نام در {' '}
              <span>دیجی شاپ</span>
            </p>
            <p className="text-sm text-(--text-secondary)">
              برای ورود به دیجی شاپ شماره موبایل خود را وارد کنید:
            </p>
          </div>
          <form className="flex flex-col items-center justify-center">
            <div className="relative w-full my-4">
              <Input
                id="phoneNumber"
                className="peer w-full p-4 border border-gray-400 rounded-md outline-none transition focus:border-black"
                value={phoneNumber}
                onChange={onPhoneNumberChange}
                maxLength={11}
                minLength={11}
                dir="ltr"
              />
              <label htmlFor="phoneNumber" className={`peer-focus:top-0 peer-focus:text-black peer-focus:bg-white absolute left-1 top-1/2 -translate-y-1/2 mr-2.5 transition-all bg-transparent p-1 text-(--text-secondary) hover:cursor-text ${phoneNumber !== '' ? "top-0! bg-white!" : ''}`}>شماره موبایل...</label>
            </div>
          </form>
          <Link href="/verification" className="block w-full">
            <Button className="w-full p-4 bg-(--primary-color) rounded-md transition text-white disabled:bg-(--primary-color)/50" disabled={!isOK}>
              ورود به دیجی شاپ
            </Button>
          </Link>
          <div className="flex justify-center items-center p-5">
            <div className="text-xs">
              ورود شما به معنای پذیرش شرایط {' '}
              <Link href="/" className="text-(--primary-color) max-sm:text-[8px]">دیجی شاپ</Link>
              {' '} و {' '}
              <Link href="#" className="text-(--primary-color) max-sm:text-[8px]">قوانین حریم خصوصی</Link>
              {' '}است.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}