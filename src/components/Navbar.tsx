import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-green-500 texte-white px-6 py-4 flex justify-between items-center shadow-md'>
        <Link href="/" className='text-2xl font-bold' >My Dashboard</Link>

        <div className='flex gap-6'>
            <Link href="/home" className='hover:underline' >Home</Link>
            <Link href="/dashboard" className='hover:underline' >Dashboard</Link>
            <Link href="/profile" className='hover:underline' >Profile</Link>
        </div>
    </nav>
  )
}

export default Navbar