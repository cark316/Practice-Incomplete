'use client'

import { AnimatePresence, motion } from 'framer-motion'

const word = 'Nice²';

const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  export default function letterIn() {
  return (
    <motion.div className='flex text-[128px] flex-wrap'>
      {word.split('').map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  )
}