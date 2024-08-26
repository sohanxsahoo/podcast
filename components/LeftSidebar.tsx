import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  return (
    <div className='left_sidebar'>
      <nav className='flex flex-col gap-6'>
        <Link href="/">
        <Image src="/icons/logo.svg" alt='logo' width={23} height={27} />
        </Link>
      </nav>
    </div>
  )
}

export default LeftSidebar
