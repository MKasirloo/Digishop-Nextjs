"use client";

import { useState } from "react";
import Image from "next/image";
import { CrossIcon } from "@/app/assets/icons";
import { VideoPlayer, VideoSkin, Video } from '@videojs/react/video';
import '@videojs/react/video/skin.css';

export default function Stories() {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  return(
    <>
      <div className="my-10 flex justify-around gap-8 overflow-auto scrollbar-none">
        <div className="w-15 h-15 flex justify-center items-center" onClick={() => setIsStoryModalOpen(true)}>
          <div className="relative w-12.5 h-12.5 shrink-0 rounded-full flex justify-center items-center text-white isolate m-1 hover:cursor-pointer
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-linear-0
            before:from-[#004cff]
            before:via-[#4d00ff]
            before:to-[#c300ff]
            before:scale-110
            before:-z-1
            before:rounded-full
          ">
            <Image width={60} height={60} src="/images/stories/iPhone-18.png" alt="iPhone 18" />
          </div>
        </div>
        <div className="w-15 h-15 flex justify-center items-center" onClick={() => setIsStoryModalOpen(true)}>
          <div className="relative w-12.5 h-12.5 shrink-0 rounded-full flex justify-center items-center text-white isolate m-1 hover:cursor-pointer
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-linear-0
            before:from-[#004cff]
            before:via-[#4d00ff]
            before:to-[#c300ff]
            before:scale-110
            before:-z-1
            before:rounded-full
          ">
            <Image width={60} height={60} src="/images/stories/PS5.webp" alt="PS5" />
          </div>
        </div>
        <div className="w-15 h-15 flex justify-center items-center" onClick={() => setIsStoryModalOpen(true)}>
          <div className="relative w-12.5 h-12.5 shrink-0 rounded-full flex justify-center items-center text-white isolate m-1 hover:cursor-pointer
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-linear-0
            before:from-[#004cff]
            before:via-[#4d00ff]
            before:to-[#c300ff]
            before:scale-110
            before:-z-1
            before:rounded-full
          ">
            <Image width={60} height={60} src="/images/stories/LOQ.webp" alt="LOQ" />
          </div>
        </div>
        <div className="w-15 h-15 flex justify-center items-center" onClick={() => setIsStoryModalOpen(true)}>
          <div className="relative w-12.5 h-12.5 shrink-0 rounded-full flex justify-center items-center text-white isolate m-1 hover:cursor-pointer
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-linear-0
            before:from-[#004cff]
            before:via-[#4d00ff]
            before:to-[#c300ff]
            before:scale-110
            before:-z-1
            before:rounded-full
          ">
            <Image width={60} height={60} src="/images/stories/Powerbank.webp" alt="Powerbank" />
          </div>
        </div>
        <div className="w-15 h-15 flex justify-center items-center" onClick={() => setIsStoryModalOpen(true)}>
          <div className="relative w-12.5 h-12.5 shrink-0 rounded-full flex justify-center items-center text-white isolate m-1 hover:cursor-pointer
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-linear-0
            before:from-[#004cff]
            before:via-[#4d00ff]
            before:to-[#c300ff]
            before:scale-110
            before:-z-1
            before:rounded-full
          ">
            <Image width={60} height={60}
              src="/images/stories/iPhone-17-Pro-Max.png"
              alt="iPhone 17 Pro Max"
            />
          </div>
        </div>
        <div className="w-15 h-15 flex justify-center items-center" onClick={() => setIsStoryModalOpen(true)}>
          <div className="relative w-12.5 h-12.5 shrink-0 rounded-full flex justify-center items-center text-white isolate m-1 hover:cursor-pointer
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-linear-0
            before:from-[#004cff]
            before:via-[#4d00ff]
            before:to-[#c300ff]
            before:scale-110
            before:-z-1
            before:rounded-full
          ">
            <Image width={60} height={60} src="/images/stories/Realme-C56.webp" alt="" />
          </div>
        </div>
        <div className="w-15 h-15 flex justify-center items-center" onClick={() => setIsStoryModalOpen(true)}>
          <div className="relative w-12.5 h-12.5 shrink-0 rounded-full flex justify-center items-center text-white isolate m-1 hover:cursor-pointer
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-linear-0
            before:from-[#004cff]
            before:via-[#4d00ff]
            before:to-[#c300ff]
            before:scale-110
            before:-z-1
            before:rounded-full
          ">
            <Image width={60} height={60} src="/images/stories/S26-Ultra.webp" alt="S26 Ultra" />
          </div>
        </div>
        <div className="w-15 h-15 flex justify-center items-center" onClick={() => setIsStoryModalOpen(true)}>
          <div className="relative w-12.5 h-12.5 shrink-0 rounded-full flex justify-center items-center text-white isolate m-1 hover:cursor-pointer
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-linear-0
            before:from-[#004cff]
            before:via-[#4d00ff]
            before:to-[#c300ff]
            before:scale-110
            before:-z-1
            before:rounded-full
          ">
            <Image width={60} height={60} src="/images/stories/Headphone.webp" alt="Headphone" />
          </div>
        </div>
      </div>
      <div className={`${!isStoryModalOpen ? "hidden" : ''} fixed inset-0 z-100000 flex justify-center items-center`}>
        <div onClick={() => setIsStoryModalOpen(false)} className="fixed inset-0 bg-black opacity-30 isolate z-100001"></div>
        <VideoPlayer>
          <VideoSkin className="w-80 h-fit z-100002 relative">
            <button onClick={() => setIsStoryModalOpen(false)} className="absolute top-4 left-4 bg-gray-500/70 text-white p-1 backdrop-blur-lg rounded-full z-100002 h-7 w-7 border border-white/10"><CrossIcon /></button>
            <Video src={"https://video.digikala.com/qwkg7wg610/ZR2LDzdNAE/h_,360_800,480_1500,720_2500,k.mp4.list/index-f2-v1-a1.m3u8"} playsInline />
          </VideoSkin>
        </VideoPlayer>
      </div>
    </>
  );
}