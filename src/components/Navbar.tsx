"use client"
import { setThemeCookie } from "@/app/actions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";

export default function Navbar({ theme }: any) {
  const [logo, setLogo] = useState('/images/home/light_logo.png');

  const [nav, setNav] = useState(false)
  const handelNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    if (theme === 'dark') {
      setLogo('/images/home/dark_logo.png');
    } else {
      setLogo('/images/home/light_logo.png');
    }
  }, [theme]);

  const handelToggle = async (e: any) => {
    const checked = e.target.checked;
    if (checked === true) {
      await setThemeCookie('dark');
    } else {
      await setThemeCookie('light');
      setLogo('/images/home/dark_logo.png')
    }
  }

  const pathname = usePathname();


  return (
    <div className="fixed w-screen bg-primary-content z-10">
      <div className="flex justify-between items-center px-4 py-1 text-accent-content">
        <Link href="/" className="hidden sm:block ml-0 md:ml-2 lg:ml-8">
          <Image src={`${logo}`} width={500} height={500} alt="PLPL_logo" className="w-[10rem] lg:w-[13rem]" />
        </Link>
        <ul className="hidden sm:flex font-bold">
          <li className="p-4"><Link className={`${pathname==='/process'?'underline text-indigo-600':'no-underline'}`} href="/process">Process</Link></li>
          <li className="p-4"><Link className={`${pathname==='/services'?'underline text-indigo-600':'no-underline'}`} href="/services">Services</Link></li>
          <li className="p-4"><Link className={`${pathname==='/works'?'underline text-indigo-600':'no-underline'}`} href="/works">Works</Link></li>
          <li className="p-4"><Link className={`${pathname==='/contact'?'underline text-indigo-600':'no-underline'}`} href="/contact">Contact</Link></li>
          <li className="p-4"><Link className={`${pathname==='/technologies'?'underline text-indigo-600':'no-underline'}`} href="/technologies">Technologies</Link></li>
          <li className="p-4">
            <label className="cursor-pointer grid place-items-center">
              <input type="checkbox" checked={theme === 'dark' ? true : false} onChange={(e) => handelToggle(e)} className="toggle theme-controller  row-start-1 col-start-1 col-span-2" />
              <svg className="col-start-1 row-start-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
              <svg className="col-start-2 row-start-1 text-warning-content" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="block sm:hidden z-10">
          <div onClick={handelNav} className="mt-[1px]">
            {nav ? <AiOutlineClose size={30} className="text-accent-content absolute right-5 top-8 bottom-0 shadow-lg p-1 rounded-full transition-transform transform hover:scale-x-110 duration-500" /> : <AiOutlineMenu size={20} className="text-accent-content" />}
          </div>
        </div>

        <Link href="/" className="sm:hidden block">
          <Image src={`${logo}`} width={500} height={500} alt="PLPL_logo" className="w-[10rem] lg:w-[13rem]" />
        </Link>

        <div className="block sm:hidden">
          <div className="flex justify-center items-center ">
            <label className="cursor-pointer grid place-items-center">
              <input type="checkbox" checked={theme === 'dark' ? true : false} onChange={(e) => handelToggle(e)} className="toggle theme-controller  row-start-1 col-start-1 col-span-2" />
              <svg className="col-start-1 row-start-1 " xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
              <svg className="col-start-2 row-start-1 " xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary-content text-accent-content text-center ease-in duration-300' : 'absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
          <ul>
            <li onClick={handelNav} className="p-4 text-4xl hover:text-gray-500"><Link className={`${pathname==='/'?'underline text-indigo-600':'no-underline'}`}  href="/">Home</Link></li>
            <li onClick={handelNav} className="p-4 text-4xl hover:text-gray-500"><Link className={`${pathname==='/process'?'underline text-indigo-600':'no-underline'}`}  href="/process">Process</Link></li>
            <li onClick={handelNav} className="p-4 text-4xl hover:text-gray-500"><Link className={`${pathname==='/services'?'underline text-indigo-600':'no-underline'}`}  href="/services">Services</Link></li>
            <li onClick={handelNav} className="p-4 text-4xl hover:text-gray-500"><Link className={`${pathname==='/works'?'underline text-indigo-600':'no-underline'}`}  href="/works">Works</Link></li>
            <li onClick={handelNav} className="p-4 text-4xl hover:text-gray-500"><Link className={`${pathname==='/contact'?'underline text-indigo-600':'no-underline'}`}  href="/contact">Contact</Link></li>
            <li onClick={handelNav} className="p-4 text-4xl hover:text-gray-500"><Link className={`${pathname==='/technologies'?'underline text-indigo-600':'no-underline'}`}  href="/technologies">Technologies</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}