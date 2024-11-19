import { Instagram } from "iconsax-react"
import { Github, Linkedin } from "lucide-react"
import Aos from "aos"
import { useEffect } from "react"


const Contact = () => {
  useEffect(() => {
    Aos.init
  }, [])
  return (
    <section className="flex flex-col p-10" id="contact">
      <h1 className='font-extrabold text-Title text-2xl mb-5 phone:text-xl laptop:text-2xl' data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" >Get In Touch</h1>
      <div className="flex justify-between items-center gap-5 phone:flex-col tablet:flex-row">
        <div>
          <h3 className="text-Text text-lg phone:text-base laptop:text-lg" data-aos="fade-up" data-aos-delay="300">Want to learn more? Feel free to contact us using the information below!</h3>
          <h4 className="text-Primary font-semibold mb-2 phone:text-sm tablet:text-base" data-aos="fade-up" data-aos-delay="400">rifandiyusuf47@gmail.com</h4>
        </div>
        <div className='flex flex-row gap-2.5'>
          <a className='p-2 transition hover:bg-Container hover:text-Primary rounded-md' href="https://www.instagram.com/rifandiysf" data-aos="fade-zoom-in" data-aos-offset="0" data-aos-easing="ease-in-back" data-aos-delay="300"><Instagram/></a>
          <a className='p-2 transition hover:bg-Container hover:text-Primary rounded-md' href="https://github.com/Rifandiysf" data-aos="fade-zoom-in" data-aos-offset="0" data-aos-easing="ease-in-back" data-aos-delay="400"><Github /></a>
          <a className='p-2 transition hover:bg-Container hover:text-Primary rounded-md' href="https://www.linkedin.com/in/rifandiyusuf" data-aos="fade-zoom-in" data-aos-offset="0" data-aos-easing="ease-in-back" data-aos-delay="500"><Linkedin/></a>
        </div>
      </div>
    </section>
  )
}

export default Contact