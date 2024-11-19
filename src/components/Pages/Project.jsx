import Aos from "aos"
import { useEffect } from "react"

const Project = () => {
  useEffect(() => {
    Aos.init
  }, [])
  return (
    <section className="flex flex-col p-10 min-h-screen w-full" id="project">
      <h2 className="font-extrabold text-Title text-2xl mb-5 phone:text-xl laptop:text-2xl" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">My Project</h2>
      <div className="grid grid-cols-2 gap-10 phone:grid-cols-1 tablet:grid-cols-2">
        <div className="flex flex-col justify-center items-center bg-Container w-[35rem] h-[15rem] p-5 rounded-lg phone:w-full phone:h-[10rem] laptop:w-[35rem] laptop:h-[15rem]" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h2 className="text-Title text-2xl font-bold phone:text-xl laptop:text-2xl">Title Project</h2>
          <div className="flex gap-5 phone:gap-2 laptop:gap-5">
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-Container w-[35rem] h-[15rem] p-5 rounded-lg phone:w-full phone:h-[10rem] laptop:w-[35rem] laptop:h-[15rem]" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h2 className="text-Title text-2xl font-bold phone:text-xl laptop:text-2xl">Title Project</h2>
          <div className="flex gap-5 phone:gap-2 laptop:gap-5">
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-Container w-[35rem] h-[15rem] p-5 rounded-lg phone:w-full phone:h-[10rem] laptop:w-[35rem] laptop:h-[15rem]" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h2 className="text-Title text-2xl font-bold phone:text-xl laptop:text-2xl">Title Project</h2>
          <div className="flex gap-5 phone:gap-2 laptop:gap-5">
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-Container w-[35rem] h-[15rem] p-5 rounded-lg phone:w-full phone:h-[10rem] laptop:w-[35rem] laptop:h-[15rem]" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h2 className="text-Title text-2xl font-bold phone:text-xl laptop:text-2xl">Title Project</h2>
          <div className="flex gap-5 phone:gap-2 laptop:gap-5">
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
            <span className="px-3 bg-Primary rounded-md mt-2 text-Body font-semibold">Tect</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project