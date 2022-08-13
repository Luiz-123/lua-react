import logo from '../../src/assets/logo.svg'
import iconClose from '../../src/assets/icon-close.svg'
import iconHamburger from '../../src/assets/icon-hamburger.svg'

import { useState } from 'react'

const Nav = () => {

    let [open, setOpen] = useState(false);

    const Links = [
        {name:"HOME"},
        {name:"DESTINO"},
        {name:"EQUIPE"},
        {name:"TECNOLOGIA"},
    ]

    return(
        <nav className="flex items-center justify-between pt-5">
            <img src={logo} className="w-10 ml-7" />
            <img 
                src={open ? iconClose : iconHamburger} 
                className="z-20 fixed right-5 top-6 cursor-pointer md:hidden" 
                onClick={() => setOpen(!open)}>
            </img>
            <ul 
                className={`bg-[#ffffff14] backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0 md:h-auto h-screen duration-500 ease-linear 
                ${!open ? 'right-[-100%]' : 'right-0'}`}
            >
                {
                    Links.map((Link,index) => (
                        <li key={index} className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6">
                            <a href="#" className="text-white text-lg md:py-5 py-3 inline-block font-normal">
                                <span className="font-bold mr-1.5">0{index}</span>{Link.name}
                            </a>
                        </li>
                    ))
                }
                
            </ul>
        </nav>
    )
}

export default Nav