import Sidebar from './components/Layout/Sidebar'
import { useState } from 'react'
import Profiles from './components/Pages/Profiles'
import About from './components/Pages/About'
import Skills from './components/Pages/Skills'
import Project from './components/Pages/Project'
import Contact from './components/Pages/Contact'
import Footer from './components/Layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <main className='ml-[110px] phone:ml-0 laptop:ml-[110px]'>
        <Profiles/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </main>
      <footer className='p-3 bg-Primary flex justify-center items-center'>
        <Footer/>
      </footer>
    </>
  )
}

export default App
