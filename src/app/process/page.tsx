import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process PLPL Infotech & Infra Private Limited',
  description: 'Process PLPL Infotech & Infra Private Limited',
}

const boxData = [
  {
    name:"Transformative",
    dec:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
    image:"/images/home/process_one.png"
  },
  {
    name:"Investigation",
    dec:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
    image:"/images/home/process_two.png"
  },
  {
    name:"Contemplation",
    dec:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
    image:"/images/home/process_three.png"
  },
  {
    name:"Reconstruction",
    dec:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
    image:"/images/home/process_four.png"
  },
  {
    name:"Liberation",
    dec:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
    image:"/images/home/process_five.png"
  },
  {
    name:"Integration",
    dec:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo? Lorem ipsum dolor sit.",
    image:"/images/home/process_six.png"
  }
]


export default function Process() {
  return (
    <div className='bg-secondary-content'>
      <div className='pt-[3.5rem] pb-[0rem] md:pt-[5rem] md:pb-[1rem] lg:pt-[6.2rem] lg:pb-[2rem]'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-6">
          {
            boxData.map((data:any,i:number)=>(
              <div key={i} className='py-6 px-2 rounded-xl shadow-lg bg-neutral text-accent-content'>
              <div className='flex flex-row gap-3'>
                <div className='w-[25%] flex justify-end items-center'>
                  <Image src={data.image} width={500} height={500} alt='The 5r' className='w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem] shadow-2xl rounded-full p-2  ' style={{ boxShadow: '0px 0px 8px gray' }} />
                </div>
                <div className='w-[75%]'>
                  <h2 className='font-bold text-lg md:text-xl'>The 5R Process</h2>
                  <p className='font-normal md:font-medium text-sm'>
                    {data.dec}
                  </p>
                </div>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
