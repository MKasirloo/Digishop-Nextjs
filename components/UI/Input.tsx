"use client";

import { InputHTMLAttributes } from "react";

export default function Button(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} />;
}