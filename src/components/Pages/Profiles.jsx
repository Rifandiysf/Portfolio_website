import { ArrowRight2, Instagram } from 'iconsax-react'
import Picture from '../../assets/avatar-2.svg'
import { Github, Linkedin} from 'lucide-react'
import SvgProfile from '../svg/SvgProfile'

const Profiles = () => {
  return (
    <section className="flex justify-center items-center relative min-h-screen">
      <div className='max-w-[540px] flex flex-col justify-center items-center'>
        <img src={Picture} alt='Profile Picture' className='mb-2'/>
        <h1 className='font-extrabold text-2xl text-Title mb-2'>Rifandi Yusuf</h1>
        <span className='font-semibold mb-2'>Junior Front-end Developer</span>
        <div className='flex flex-row gap-2.5 mb-2'>
          <a className='p-2 transition hover:bg-Container hover:text-Primary rounded-md' href="https://www.instagram.com/rifandiysf"><Instagram /></a>
          <a className='p-2 transition hover:bg-Container hover:text-Primary rounded-md' href="https://github.com/Rifandiysf"><Github /></a>
          <a className='p-2 transition hover:bg-Container hover:text-Primary rounded-md' href="https://www.linkedin.com/in/rifandiyusuf"><Linkedin /></a>
        </div>
        <button className='group flex justify-center items-center bg-Primary p-2.5 rounded-xl text-Body font-semibold transition hover:pr-4'>Learn More <ArrowRight2 className='group-hover:translate-x-2' size={16}/></button>
      </div>
      <SvgProfile/>
      <div className='absolute left-50 bottom-10'>
        <a href="#about" className='flex justify-center items-center flex-col'>
          <span className='font-semibold text-Text'>Scroll Down</span>
          <div className='mt-3'>
          <svg className="animate-bounce" width="32" height="32" viewBox="0 0 24 24" fill="none"><path fill="#584dff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.53 11.03l-3 3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-3-3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.72 1.72V8.5c0-.41.34-.75.75-.75s.75.34.75.75v5.19l1.72-1.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z"></path></svg>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Profiles