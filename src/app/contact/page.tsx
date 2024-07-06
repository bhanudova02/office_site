"use client"
import { HiMiniUserCircle } from "react-icons/hi2";
import { MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";

export default function Contact() {
  function handleContactSubmit(e: any) { }
  function handleSubmit(e: any) { }
  return (
    <div className="bg-secondary-content ">
      <div className="pt-[4.5rem] pb-[14px] md:pt-[4.8rem] md:pb-[12px] lg:pt-[5.9rem] lg:pb-[1.6rem]">
        <div className="bg-success shadow-lg m-4 md:m-10 rounded-md p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
            <div className="flex justify-center items-center">
              <iframe className="w-full h-full rounded-lg shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.2259383567!2d78.0783569505099!3d17.412077860436995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1713524588349!5m2!1sen!2sin" id="responsive-iframe" ></iframe>
            </div>
            <div className="px-4 py-2 shadow-md">
              <h2 className="text-warning text-center font-bold text-xl md:text-3xl mb-2">Contact Us </h2>
              <form onSubmit={(event) => handleContactSubmit(event)}>
                <input type="text" placeholder="Enter your name" className="text-accent-content font-semibold w-full border-2 border-white p-1.5 rounded-md placeholder:font-semibold outline-none" required />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input type="email" className="text-accent-content font-semibold border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Enter your email" />
                  <input type="number" className="text-accent-content font-semibold border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Enter your Mobile No" />
                </div>
                <select className=" border-2 border-white w-full mt-4 p-1.5 rounded-md outline-none font-semibold text-accent-content">
                  <option value="" >Service</option>
                  <option value="1" >Wed Developmer</option>
                  <option value="2" >SEO</option>
                  <option value="3" >UI/UX</option>
                  <option value="3" >Other</option>
                </select>
                <textarea className="text-accent-content font-semibold border-2 border-white w-full mt-4 p-5 rounded-md outline-none placeholder:font-medium" placeholder="Enter your message" />
                <button className="flex w-full justify-center rounded-lg bg-warning py-2 mt-2 text-center font-semibold text-white">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>


        <div className="mt-0 lg:mt-0 flex justify-center items-center">
          <div className="bg-success-content rounded-md m-4 md:m-10 py-6 px-10 w-full md:w-[90%] lg:w-full">
            <h2 className="text-center text-warning font-semibold text-2xl md:text-3xl mb-4">Want to work with us</h2>
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 ">
                <dl>
                  <dt className="text-white mb-1">Your Name</dt>
                  <dd><input type="text" className="text-accent-content w-full border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Enter name" /></dd>
                </dl>
                <dl>
                  <dt className="text-white mb-1">Your Email</dt>
                  <dd>
                    <input type="email" className="text-accent-content w-full border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Enter email" />
                  </dd>
                </dl>
              </div>
              <div className="mt-6 text-accent-content">
                <h2 className="text-warning mb-2 text-lg font-bold">What are you good at?</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <input type="email" className="w-full border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="UI Designing" />
                  </div>
                  <div>
                    <input type="email" className="w-full border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Web Development" />
                  </div>
                  <div>
                    <input type="email" className="w-full border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="3D Game Artist" />
                  </div>
                  <div>
                    <input type="email" className="w-full border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Bussiness Development" />
                  </div>
                  <div>
                    <input type="email" className="w-full border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Frontend Development" />
                  </div>
                  <div>
                    <input type="email" className="w-full border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Bussiness Development" />
                  </div>
                  <div>
                    <input type="email" className="w-full border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Illustration" />
                  </div>
                  <div>
                    <input type="email" className="w-full border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Backend Development" />
                  </div>
                  <div>
                    <input type="email" className="w-full border-2 border-white p-1.5 rounded-md outline-none placeholder:font-medium" required placeholder="Data Analyst" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-4 mb-4 md:mb-0">
                  <div className="mt-2 md:mt-0">
                    <h2 className="text-warning font-bold text-lg">Do you have a resume that might help us know you better? Attach here</h2>
                  </div>
                  <div className="text-warning font-bold flex justify-center md:justify-end items-center text-base mt-2">
                    <div>
                      <h2 className="flex">For any queries contact HR <HiMiniUserCircle className="text-2xl" /></h2>
                      <p className="flex"><MdPhoneInTalk className="text-2xl" /> Phone : +91 -0000000000</p>
                      <p className="flex"><MdOutlineEmail className="text-[1.4rem]" />Email : plpl@fotech.com</p>
                    </div>
                  </div>
                </div>
                <button className="p-2 bg-warning text-white rounded-md w-full md:w-52">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

