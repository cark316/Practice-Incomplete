'use client'

import HoverEffect from './components/hoverEffect'
import LetterIn from './components/letterIn'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <div><LetterIn /></div>
    </div>
  )
}

export default page