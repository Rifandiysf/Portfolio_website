import { AppWindow, MonitorSmartphone, PhoneCall } from "lucide-react"
import SvgLanguage from "../svg/SvgLanguage"
import SvgTools from "../svg/SvgTools"


const Skills = () => {
  return (
    <section className="flex flex-col p-10 min-h-screen" id="#skills">
      <h1 className="font-extrabold text-Title text-2xl mb-5 phone:text-xl laptop:text-2xl">Skills</h1>
        <div className='flex flex-col justify-center items-center mt-10'>
          <h2 className='mb-5 text-Title font-bold text-2xl phone:text-xl laptop:text-2xl'>Soft and Hard Skill</h2>
          <div className='flex gap-5 phone:flex-col tablet:flex-row'>
            <div className="flex flex-col justify-center items-center">
              <AppWindow size={32}/>
              <h3 className="text-xl font-semibold phone:text-base tablet:text-lg laptop:text-xl">Web Design</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MonitorSmartphone size={32}/>
              <h3 className="text-xl font-semibold phone:text-base tablet:text-lg laptop:text-xl">Responsive Layout</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <PhoneCall size={32}/>
              <h3 className="text-xl font-semibold phone:text-base tablet:text-lg laptop:text-xl">Communication</h3>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center gap-40 mt-40 phone:gap-10 phone:mt-10 phone:flex-col laptop:flex-row'>
          <div className="flex flex-col justify-center items-center bg-Container p-10 pt-5 rounded-md phone:p-4 phone:pt-2 tablet:p-10 tablet:pt-5">
            <h2 className='mb-5 text-Title font-semibold text-xl phone:text-base tablet:text-lg laptop:text-xl'>Tools</h2>
            <SvgTools/>
          </div>
          <div className="flex flex-col justify-center items-center bg-Container p-10 pt-5 rounded-md phone:p-4 phone:pt-2 tablet:p-10 tablet:pt-5">
            <h2 className='mb-5 text-Title font-semibold text-xl phone:text-base tablet:text-lg laptop:text-xl'>Language And Framework</h2>
            <SvgLanguage/>
          </div>
        </div>
    </section>
  )
}

export default Skills