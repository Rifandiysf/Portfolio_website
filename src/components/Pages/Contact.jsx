import { Instagram } from "iconsax-react"
import { Github, Linkedin } from "lucide-react"


const Contact = () => {
  return (
    <section className="flex flex-col p-10">
      <h1 className='font-extrabold text-Title text-2xl mb-5 phone:text-xl laptop:text-2xl'>Get In Touch</h1>
      <div className="flex justify-between items-center gap-5 phone:flex-col tablet:flex-row">
        <div>
          <h3 className="text-Text text-lg phone:text-base laptop:text-lg">Want to learn more? Feel free to contact us using the information below!</h3>
          <h4 className="text-Primary font-semibold mb-2 phone:text-sm tablet:text-base">rifandiyusuf47@gmail.com</h4>
        </div>
        <div className='flex flex-row gap-2.5'>
          <a className='p-2 transition hover:bg-Container hover:text-Primary rounded-md' href="https://www.instagram.com/rifandiysf"><Instagram/></a>
          <a className='p-2 transition hover:bg-Container hover:text-Primary rounded-md' href="https://github.com/Rifandiysf"><Github /></a>
          <a className='p-2 transition hover:bg-Container hover:text-Primary rounded-md' href="https://www.linkedin.com/in/rifandiyusuf"><Linkedin/></a>
        </div>
      </div>
    </section>
  )
}

export default Contact