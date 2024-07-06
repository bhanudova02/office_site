import Link from "next/link";
import { BiDownArrow } from "react-icons/bi";

export default function Header() {

  return (
    <div className="flex justify-center items-center h-[90vh] md:h-[60vh] lg:h-screen bg-fixed bg-cover custom-image md:bg-[url('/images/home/home-bg.jpg')] bg-[url('/images/home/home-bg-mobile.jpg')]">
      <div className="absolute center w-full h-[90vh]  md:h-[60vh] lg:h-screen bg-black/30" />
      <div className="p-5 text-white z-[5] pt-16">
        <h1 className="text-lg md:text-2xl lg:text-3xl">Welcome to</h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2">PLPL Infotech & Infra Private Limited</h2>
        <p className="w-full md:w-[40rem] text-lg font-sans">
          We're passionate about crafting cutting-edge digital solutions that prioritize human experience, utilizing state-of-the-art technologies to create innovative enterprise applications.
        </p>
        <div className="mt-3">
          <Link href="/#main"><button className="px-8 py-2 border shadow-md rounded hover:bg-slate-600"><BiDownArrow /></button></Link>
        </div>
      </div>
    </div>
  );
}















