import Image from "next/image";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTelegram } from "react-icons/fa";

export default function Footer() {
  const now = new Date();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-6 py-10 bg-base-100">
        <div className="flex gap-10">
          <div>
            <Image src={'/images/home/dark_logo.png'} width={500} height={500} alt="PLPL_logo" className="w-[13rem]" />
          </div>
          <div className="text-white">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">Address</h2>
            <p className="text-xs md:text-sm lg:text-base ">
              PLPL Infotech & Infra Private Limited<br />
              007, DEMO HYD, DEMO Pl,<br />
              Lorem ipsum dolor sit amet.<br />
              Hyderabad,Telangana - 050034.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <div className="flex gap-6 md:gap-4 lg:gap-8 text-white">
            <FaPhoneAlt className="text-3xl" />
            <FaFacebook className="text-3xl" />
            <FaTelegram className="text-3xl" />
            <FaLinkedin className="text-3xl" />
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-info text-white">
        <aside>
          <p>Copyright © {now.getFullYear()}  - All right reserved by PLPL Infotech & Infra Private Ltd</p>
        </aside>
      </footer>
    </div>
  )
}