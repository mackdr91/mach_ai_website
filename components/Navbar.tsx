import React from 'react'
import Image from 'next/image'



export default function Navbar() {
  return (
   <nav>
    <div className='flex justify-center py-6'>
     <Image
      width={150}
      height={100}
      src="/images/Mach X.png"
      alt="Logo"
      className="object-scale-down"
     />
    </div>
   </nav>
  )
}