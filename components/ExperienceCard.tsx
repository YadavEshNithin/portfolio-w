import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'


type Props = {
   experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px]  md:w-[600px] xl:w-[900px] xl:  snap-center
     bg-[#292929] p-3 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mx-auto">
        <motion.img
        initial={{
            y:-150,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity:1, y:0,
        }}
        viewport={{
            once:true,
        }}
         className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] mt-10 xl:mt-0 object-cover object-center" 
        src={urlFor(experience?.companyImage).url()} alt="" />

        <div className="px-0 md:px-10">
            <h4 className="text-3xl ml-2 font-light">Fresher</h4>
            <p className="font-bold text-2xl ml-2 mt-1">Qualification-Bachelors oF Technology{`(IT)`}</p>
            <p className="uppercase py-5 text-gray-500 ml-2">{new Date(experience.dateStarted).toDateString()}- {' '}
                                                          {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>
            <div className="flex space-x-2 my-2">
                {experience.technologies.map((technology)=>(
                    <img
                    key={technology._id}
                     className="h-8 w-8 rounded-full ml-2" src={urlFor(technology?.image).url()} alt="" />
                ))}
            </div>
            
            <ul className="list-disc space-y-4 ml-5 text-lg max-h-80 xl:max-h-44  overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-5">
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}