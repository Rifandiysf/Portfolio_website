import { CodeCircle, DocumentCode, InfoCircle, Moon, Personalcard, Sms, Sun1, } from "iconsax-react"


const Sidebar = () => {
  return (
    <aside className="flex justify-between items-center flex-col fixed top-0 left-0 z-10 min-h-screen w-[100px] p-10 bg-Body border-r-[1px] border-solid border-slate-950/5 phone:hidden laptop:flex">
        <a href="#profile" className="bg-Container p-3 rounded-lg shadow-sm">
            <h1 className="font-extrabold"><span className="text-Primary">R</span>y.</h1>
        </a>

        <nav>
            <div>
                <ul className="flex flex-col gap-5 list-none">
                    <li className="p-2 rounded-lg  hover:bg-Container hover:text-Primary"><a href="#profile"><Personalcard size={24}/></a></li>
                    <li className="p-2 rounded-lg  hover:bg-Container hover:text-Primary"><a href="#about"><InfoCircle size={24}/></a></li>
                    <li className="p-2 rounded-lg  hover:bg-Container hover:text-Primary"><a href="#skills"><CodeCircle size={24}/></a></li>
                    <li className="p-2 rounded-lg  hover:bg-Container hover:text-Primary"><a href="#project"><DocumentCode size={24}/></a></li>
                    <li className="p-2 rounded-lg  hover:bg-Container hover:text-Primary"><a href="#contact"><Sms size={24}/></a></li>
                </ul>
            </div>
        </nav>
        <div>
            <Moon/>
            <Sun1/>
        </div>
    </aside>
  )
}

export default Sidebar