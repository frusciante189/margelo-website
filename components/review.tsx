import React from 'react'

interface Props {
  by: string
}

const Review: React.FC<Props> = ({ children, by }) => {
  return (
    <div className="flex flex-col justify-center px-5 text-center md:px-10 lg:px-20">
      <div className="text-xl leading-10 tracking-tight md:text-2xl lg:leading-[3rem]">
        &ldquo;{children}&rdquo;
      </div>
      <div className="mt-6">&mdash; {by}</div>
    </div>
  )
}

export default Review
