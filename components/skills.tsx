import React, { useContext, useRef } from 'react'
import s from '../styles/skills.module.css'
import { ScrollContext } from '../utils/scroll-observer'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 3
  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }
  return (
    <div className="bg-black text-white" ref={refContainer}>
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-10 py-24 text-4xl font-semibold tracking-tight md:py-28 md:text-6xl lg:px-20 lg:py-36 lg:text-7xl">
        <div className="leading-[1.15]">
          <div
            className={s.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            We know our tools inside out.
          </div>
          <span
            className={`${s.skillText} inline-block after:content-["_"]`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Our team has contributed 123 commits to React Native core, powering
            thousands of apps worldwide.
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            We&apos;re maintaining some of the most popular open-source
            projects, with over <strong>1,234</strong> downloads
          </span>
        </div>
      </div>
    </div>
  )
}

export default Skills
