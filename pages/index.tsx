import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSocials } from '@/utils/fetchSocials'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSkills } from '@/utils/fetchSkills'

// const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo:PageInfo,
  experiences:Experience[],
  skills:Skill[],
  projects:Project[],
  socials:Social[],
}

export default function Home({pageInfo, experiences, skills, projects, socials}:Props) {
  const portfolio = `${pageInfo?.name} -Portfolio`;
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        <Head>
          <title>{portfolio}</title>
        </Head>
       
        <Header socials = {socials} />

        
        <section id="hero" className="snap-start">
        <Hero pageInfo ={pageInfo}/>
        </section>

        
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo}/>
        </section>

        {/*Experience*/}
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences}/>
        </section>

        {/*Skills*/}
        <section id="skills" className="snap-start">
          <Skills skills = {skills}/>
        </section>
        
        {/*Projects*/}
        <section id="projects" className="snap-start">
          <Projects projects = {projects}/>
        </section>

        {/*Contace Me*/}
        <section id="contact" className="snap-start">
          <ContactMe pageInfo={pageInfo}/>
        </section>

        <Link href="#hero">
        <footer className="sticky bottom-10 xl:bottom-16  cursor-pointer z-0">
          <div className="flex ml-4">
            <img className="h-6 w-6 xl:h-10 xl:w-10 rounded-full filter grayscale hover:grayscale-0"
            src="https://cdn.sanity.io/images/16w7bcpm/production/08fc667fe30d3be7da6a287809786992446eb06a-1269x1720.jpg" alt="" />
          </div>
        </footer>
        </Link>
        


        {/* <h1 className="text-blue-800">Let's Build an Awesome Portfolio</h1> */}
      </div>
    </>
  )
}


export const getStaticProps:GetStaticProps<Props> = async()=>{

  const pageInfo:PageInfo = await fetchPageInfo();
  const experiences:Experience[] = await fetchExperiences();
  const skills:Skill[] = await fetchSkills();
  const projects:Project[] = await fetchProjects();
  const socials:Social[] = await fetchSocials();

  return {
    props : {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    }
  }

}