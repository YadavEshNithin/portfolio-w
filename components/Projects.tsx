import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Link from 'next/link';

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
    // const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1.5, }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute xl:top-12 top-14 uppercase tracking-[16px] md:tracking-[20px] text-gray-500 text-2xl top">Projects</h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects?.map((project, i) => (
                    <div
                        key={project._id}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            initial={{
                                y: -180,
                                opacity: 0,
                            }}
                            transition={{ duration: 1.2, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true, }}
                            src={urlFor(project?.image).url()} alt=""
                            className="w-[160px] mt-4 xl:mt-10 h-[80px] md:w-[500px] md:h-[300px] xl:w-[500px] xl:h-[500px] md:my-2 md:mt-1"
                        />
                        <div className="space-y-2 md:space-y-6 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-1xl md:text-3xl xl:text-4xl font-semibold text">
                                <span className="underline decoration-[#F7AB0A]/50">Case Study {i + 1} of {projects.length}:
                                </span>
                                {project?.title}
                            </h4>
                            <Link href={`${project?.linkToBuild}`} target="_blank">
                                <button className="bg-[#F7AB0A] px-2 my-1 rounded-md text-black font-bold text-xs text-left mx-auto  py-1">Build Demo
                                </button>
                            </Link>
                            <div className="flex items-center space-x-2 justify-center">
                                {project.technologies.map(technology => (
                                    <img className="h-6 w-6 md:h-10 md:w-10 xl:h-12 xl:w-12" key={technology._id} src={urlFor(technology.image).url()} alt="" />
                                ))}
                            </div>
                            <p className="text-sm md:text-lg xl:text-lg text-center md:text-left">
                                {project?.summary}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    )
}

export default Projects