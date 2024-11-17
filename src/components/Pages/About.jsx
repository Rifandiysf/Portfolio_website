import Picture from '../../assets/about-illustation.svg'

const About = () => {
  return (
    <section className='flex flex-col p-10 min-h-screen' id='#about'>
      <h1 className='font-extrabold text-Title text-2xl mb-5 phone:text-xl laptop:text-2xl'>About Me</h1>
      <div className='grid grid-cols-2 justify-center items-center w-full h-[540px] phone:grid-cols-1 tablet:grid-cols-2'>
        <img src={Picture} alt="Profile Picture" className='w-[30rem] flex justify-center items-center phone:w-[15rem] laptop:w-[30rem]'/>
        <div className='bg-Container p-5 rounded-md'>
          <p className='text-Text text-xl text-justify phone:text-xs laptop:text-xl'>Hallo Semua, saya <span className='font-bold'>Rifandi Yusuf</span>, seorang pelajar SMK dari Bandung, Jawa Barat, yang bercita-cita menjadi front-end developer dan mobile developer profesional. Saya sangat mencintai dunia desain dan Coding, saya selalu bersemangat menciptakan karya yang menarik secara visual. Keinginan saya adalah menjadi ahli di bidang <span className='font-bold'>front-end development, mobile development, dan UI/UX,</span> sehingga dapat menghubungkan kreativitas desain dengan pengalaman pengguna yang optimal di berbagai platform.</p>
        </div>
      </div>
    </section>
  )
}

export default About