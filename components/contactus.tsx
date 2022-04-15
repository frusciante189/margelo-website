import React, { useState, useCallback } from 'react'
import Image from 'next/image'

const Contactus: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black pt-10 text-white">
      <div className="flex flex-1 flex-col items-center justify-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image src="/assets/logo.svg" width={30} height={30} alt="logo" />
        </div>
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form className="mt-16 flex min-w-full flex-col gap-4 px-10 lg:mt-20 lg:min-w-[500px]">
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            maxLength={128}
            placeholder="Company name"
            className="rounded-3xl border-2 border-white bg-black px-8 py-2 text-white outline-none"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={128}
            placeholder="Your E-mail"
            className="rounded-3xl border-2 border-white bg-black px-8 py-2 text-white outline-none"
          />
          <textarea
            name="message"
            id="message"
            required
            maxLength={1048576}
            placeholder="Additional information"
            className="min-h-[16em] rounded-3xl border-2 border-white bg-black px-8 py-6 text-white outline-none"
          ></textarea>
          <div className="mt-10 text-center">
            <button
              type="submit"
              className="rounded-3xl bg-white px-8 py-2 text-black"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contactus
