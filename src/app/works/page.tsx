import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Works PLPL Infotech & Infra Private Limited',
  description: 'PLPL Infotech & Infra Private Limited',
}

export default function Works() {

  const boxData = [
    {
      name: "Transformative",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/images/home/process_one.png"
    },
    {
      name: "Investigation",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/images/home/process_two.png"
    },
    {
      name: "Contemplation",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/images/home/process_three.png"
    },
    {
      name: "Reconstruction",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/images/home/process_four.png"
    },
    {
      name: "Liberation",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/images/home/process_five.png"
    },
    {
      name: "Integration",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/images/home/process_six.png"
    },
    {
      name: "Contemplation",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/images/home/process_three.png"
    },
    {
      name: "Transformative",
      dec: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
      image: "/images/home/process_one.png"
    },
  ]

  const clientLogo = ["/images/home/client_1.png", "/images/home/client_2.png", "/images/home/client_3.png", "/images/home/client_4.png", "/images/home/client_5.png", "/images/home/client_6.png", "/images/home/client_7.png", "/images/home/client_8.png"]



  return (
    <div className='bg-secondary-content text-accent-content'>
      <div className='flex justify-center items-center pt-[5rem] pb-[14px] md:pt-[6.3rem] md:pb-[1.5rem] lg:pt-[7.9rem] lg:pb-[3rem]'>
        <div>
          <div className='text-center'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold uppercase'>Develop an improved global environment.</h1>
            <p className='text-xs md:text-sm lg:text-base font-medium mt-2'>Our firm's headquarters are situated in <b>Bangalore.</b></p>
            <p className='text-xs md:text-sm lg:text-base font-medium mt-1'>We are formulating a distinctive brand image.</p>
            <h2 className='text-lg md:text-xl lg:text-2xl font-semibold'>How do you feel about these ideas?</h2>
          </div>

          <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4 md:gap-10 lg:gap-4 mt-4'>
              {
                clientLogo.map((data: any, i: number) => (
                  <div key={i} className='bg-white flex justify-center items-center w-full h-[6rem] md:w-[16rem] md:h-[10rem] lg:w-[14rem] lg:h-[10rem] px-4 rounded-3xl border-2' style={{ boxShadow: '0px 0px 6px blue' }}>
                    <Image src={data} width={500} height={500} alt="super_unlimited_logo" className='w-full h-full object-contain'/>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
