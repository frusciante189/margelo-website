import React from 'react'

const TrustedBy: React.FC = () => {
  return (
    <section className="flex min-h-screen flex-col justify-center gap-16 bg-white md:gap-32">
      <div className="flex-1"></div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-10 text-center text-xl font-bold">
          <span className="whitespace-nowrap">trusted by</span>{' '}
          <span className="whitespace-nowrap">
            some of the apps you use daily
          </span>
        </h3>
        <div>logos</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10">
          <h3 className="px-10 text-center text-3xl !leading-[3.5rem] tracking-tight lg:text-4xl">
            We believe in good communciation and a fully transparent development
            process.
          </h3>
        </div>
      </div>
      <div>Testimonials</div>
      <div className="flex-1 bg-black"></div>
    </section>
  )
}

export default TrustedBy