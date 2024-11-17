import { CodeCircle, DocumentCode, InfoCircle, Moon, Personalcard, SidebarLeft, SidebarRight, Sms, Sun1, } from "iconsax-react"
import { useState } from "react"


const Sidebar = () => {
  const [hide, setHide] = useState(true)
  const [darkMode, setDarkMode] = useState(false);
  const btnDarkmode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <aside className={`${hide ? 'translate-x-[-100px]' : 'translate-x-[0px]'} ${darkMode && 'dark'} flex justify-between items-center flex-col fixed top-0 left-0 z-10 min-h-screen w-[100px] p-10 bg-Body dark:bg-slate-950 border-r-[1px] border-solid border-slate-950/5 shadow-lg`}>
        <a href="#profile" className={`${hide && 'hidden'} bg-Container dark:bg-slate-800 p-3 rounded-lg shadow-sm`}>
            <h1 className="font-extrabold"><span className="text-Primary">R</span>y.</h1>
        </a>
        <div className="flex justify-center items-center absolute top-[7%] right-[-40%] bg-Container dark:bg-slate-800 p-[3px] rounded-md">
            <button onClick={() => setHide(!hide)}>{hide ? <SidebarRight/> : <SidebarLeft/>}</button>
        </div>

        <nav>
            <div>
                <ul className={`${hide && 'hidden'} flex flex-col gap-5 list-none`}>
                    <li className="p-2 rounded-lg  hover:bg-Container dark:hover:dark:bg-slate-800 hover:text-Primary"><a href="#profile"><Personalcard size={24}/></a></li>
                    <li className="p-2 rounded-lg  hover:bg-Container dark:hover:dark:bg-slate-800 hover:text-Primary"><a href="#about"><InfoCircle size={24}/></a></li>
                    <li className="p-2 rounded-lg  hover:bg-Container dark:hover:dark:bg-slate-800 hover:text-Primary"><a href="#skills"><CodeCircle size={24}/></a></li>
                    <li className="p-2 rounded-lg  hover:bg-Container dark:hover:dark:bg-slate-800 hover:text-Primary"><a href="#project"><DocumentCode size={24}/></a></li>
                    <li className="p-2 rounded-lg  hover:bg-Container dark:hover:dark:bg-slate-800 hover:text-Primary"><a href="#contact"><Sms size={24}/></a></li>
                </ul>
            </div>
        </nav>
        <div className={`${hide && 'hidden'}`} onClick={btnDarkmode}>
            {darkMode ? <Sun1/> : <Moon/>}
        </div>
    </aside>
  )
}

export default Sidebar