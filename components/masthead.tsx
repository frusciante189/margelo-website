import React from 'react'
import Image from 'next/image'

const Masthead: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full w-full object-cover"
      >
        <source src="/assets/masthead-bg.mp4" />
      </video>
      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
        <Image
          src="/assets/logo.svg"
          width={128 / 3}
          height={114 / 3}
          alt="logo"
        />
      </div>
      <div className="z-10 flex flex-1 flex-col items-center justify-center p-12 text-center font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
        <h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
        <h2 className="mb-2 text-2xl tracking-tight xl:text-3xl">
          <span>App Development</span> <span>done right.</span>
        </h2>
      </div>
      <div className="flex-grow-0 pb-20 transition-all duration-1000 md:pb-10">
        <Image
          src="/assets/arrow-down.webp"
          width={188 / 3}
          height={105 / 3}
          alt="scroll down"
        />
      </div>
    </div>
  )
}

export default Masthead
