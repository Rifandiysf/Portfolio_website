import Sidebar from './components/Layout/Sidebar'
import Profiles from './components/Pages/Profiles'
import About from './components/Pages/About'
import Skills from './components/Pages/Skills'
import Project from './components/Pages/Project'
import Contact from './components/Pages/Contact'
import Footer from './components/Layout/Footer'

function App() {
  return (
    <>
      <Sidebar/>
      <main className='flex flex-col items-center laptop:ml-[110px]'>
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
