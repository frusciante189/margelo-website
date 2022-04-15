import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="flex min-h-full items-center justify-center gap-8 bg-black p-20 text-white">
      <Image src="/assets/logo.svg" width={18} height={18} />
      <Link href="/">Terms</Link>
      <Link href="/">Privacy Policy</Link>
    </footer>
  )
}

export default Footer
