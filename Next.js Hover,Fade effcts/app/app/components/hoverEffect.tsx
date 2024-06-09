'use client'

import { IoIosArrowDown as Down } from "react-icons/io";
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function hoverEffect() {
  const [click, setClick ] = useState (0)
  const [count, setCount] = useState (0)
  const [hover, setHover] = useState (false)

  const mainDiv = 'flex flex-col items-center justify-top text-[64px] h-[100vh]'

  
  const list = [ 
    {label : 'Home', id : 1},
    {label : 'Services', id : 2},
    {label : 'About', id : 3},
  ]

  const listMap = list.map((list)=>(    
  <li key={list.id}>
    {list.label}
  </li>))

  return (
    <div className={mainDiv}>
      <motion.div 
        className='flex absolute' 
        initial={{ color: '#000000' }} 
        whileHover={{ scale: 1.1, color: '#FF0F00' }} 
        onHoverStart={()=>setHover(true)} 
        onHoverEnd={()=>setHover(false)}>
        Menu
        <motion.div 
          className='flex items-center mt-4' 
          animate={{ rotate: (hover == true) ? 180 : 0 }}>
          <Down />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {(hover == true) && (
          <motion.div 
            initial={{ y: 150, opacity: 0 }} 
            exit={{ opacity: 0 }}
            animate={{ color: '#000000' , opacity : 1}} 
            className='flex flex-col justify-center'> 
            {listMap}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}