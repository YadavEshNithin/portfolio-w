import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
   return (
      <motion.div
         initial={{
            opacity: 0,
         }}
         animate={{
            scale: [1, 2, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"],
         }}
         transition={{
            duration: 2.5,
         }}
         className="relative flex sm:mx-auto justify-center items-center">
         <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] mt-52 animate-ping" />
         <div className=" rounded-full border border-[#333333] h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] absolute mt-52" />
         <div className=" rounded-full border border-[#333333] h-[260px] w-[260px] lg:h-[450px] lg:w-[450px] absolute mt-52" />
         <div className=" rounded-full border border-[#F7AB0A] opacity-20 h-[330px] w-[330px] lg:h-[600px] lg:w-[600px] absolute xl:h-[580px] xl:w-[580px] mt-52 animate-pulse" />
         <div className=" rounded-full border border-[#333333] h-[260px] w-[260px] lg:h-[450px] lg:w-[450px] absolute mt-52" />
      </motion.div>
   )
}

export default BackgroundCircles;