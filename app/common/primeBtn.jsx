'use client'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

const PrimeBtn = ({btnName,darkBtn, href = '/getAQuote'}) => {
  return (
    <Link href={href}>
    <button className='prime_btn text-18'>
      {btnName}<FaArrowRight className='ms-2' />
    </button>
    </Link>
  )
}

export default PrimeBtn



