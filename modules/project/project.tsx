'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import ProjectSectionCard from '../home/elements/projectSectionCard'

const Project = () => {
  return (
    <AnimatePresence>
      <section className='px-7 md:px-14 py-20 flex flex-col gap gap-7'>
        <h2 className='text-4xl font-bold'>My All Project</h2>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(15px)', y: 100 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <ProjectSectionCard />
        </motion.div>
      </section>
    </AnimatePresence>
  )
}

export default Project