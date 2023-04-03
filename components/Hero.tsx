import React from 'react'
import Link from 'next/link';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';



type Props = {
    pageInfo:PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's ${pageInfo?.name}`,
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8  items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
             className="relative h-32 w-32 rounded-full mx-aut0 object-cover" src={urlFor(pageInfo?.heroImage).url()} alt="" />

            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 xl:tracking-[7px] lg:tracking-[15px] tracking-[5px] ">
                   {pageInfo.role}
                </h2>
                <h1 className="text-2xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5  ">
                    <Link href="#about"><button className="heroButton">About</button></Link>
                    <Link href="#experience"> <button className="heroButton">Experience</button></Link>
                    <Link href="#skills"><button className="heroButton">Skills</button></Link>
                    <Link href="#projects"><button className="heroButton">Projects</button></Link>
                </div>

            </div>
            

        </div>
    )
}