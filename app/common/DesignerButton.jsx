'use client'
import React from 'react'
import Link from 'next/link';

function ContactUsButton() {
  return (
    <Link href="/contact" className='mt-2 dBtn btnSecondary hasShadow bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300'>
      <span className='ms-2'>Contact Us Now</span>
    </Link>
  )
}

export default ContactUsButton;
