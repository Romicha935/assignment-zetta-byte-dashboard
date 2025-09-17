import React from 'react'

const Footer = () => {
  return (
    <footer className='w-ull bg-green-200  px-6 py-4 mt-8 text-center justify-center'>
        <div className='flex gap-4 mt-2 md:mt-0'>
         <p>© {new Date().getFullYear()} MyDashboard. All rights reserved.</p>
         <div>
            <a href="#" className='hover:underline' >Privecy Policy</a>
            <a href="#" className='hover:underline' > Terms of Service</a>
         </div>

        </div>
    </footer>
  )
}

export default Footer