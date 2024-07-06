import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Services PLPL Infotech & Infra Private Limited',
  description: 'Services PLPL Infotech & Infra Private Limited',
}

export default function Services() {
  return (
    <div className="bg-secondary-content">
      <div className='pt-[5rem] pb-[14px] md:pt-[6.3rem] md:pb-[8px] lg:pt-[7.9rem] lg:pb-[1px]'>
        <div className="text-accent-content pb-[1rem] mx-6">
          <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl">Web Development Company</h1>
          <div className="flex justify-center items-center">
            <p className="text-center text-xs md:text-base mt-1 w-full md:w-[46rem] lg:w-[60rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus qui delectus veniam vel provident, iusto cupiditate ullam ad, cum rerum repellendus asperiores tempore minima culpa aut assumenda, molestias voluptatibus!
            </p>
          </div>
        </div>

        <div>
          <div className="bg-neutral text-accent-content p-8 m-4 md:m-10 lg:m-16 rounded-xl ">
            <div className="flex flex-col md:flex-row gap-[18px] md:gap-0 lg:gap-7">
              <div className="w-full lg:w-[30%] flex justify-center items-center">
                <Image width={500} height={500} alt="" src={'/webdev.jpeg'} className="w-[10rem] h-[10rem] md:w-[16rem] md:h-[16rem] lg:w-[20rem] lg:h-[20rem]  rounded-full border bg-blue-50 p-2  shadow-2xl" />
              </div>
              <div className="w-full lg:w-[70%] flex justify-start items-center">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-accent-content text-start font-serif">Web Development</h1>
                  <p className="text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-content text-accent-content p-8 m-4 md:m-10 lg:m-16 rounded-xl flex justify-center items-center">
            <div className="flex flex-col md:flex-row gap-[18px] md:gap-0 lg:gap-7">
              <div className="w-full lg:w-[30%] flex justify-center items-center order-first md:order-last">
                <Image width={500} height={500} alt="" src={'/mobile2.jpg'} className="w-[10rem] h-[10rem] md:w-[16rem] md:h-[16rem] lg:w-[20rem] lg:h-[20rem] object-cover rounded-full border bg-black/5 p-2  shadow-2xl" />
              </div>
              <div className="w-full lg:w-[70%] flex justify-start items-center">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-accent-content text-start font-serif">Mobile App Development</h1>
                  <p className="text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral text-accent-content p-8 m-4 md:m-10 lg:m-16 rounded-xl ">
            <div className="flex flex-col md:flex-row gap-[18px] md:gap-0 lg:gap-7">
              <div className="w-full lg:w-[30%] flex justify-center items-center">
                <Image width={500} height={500} alt="" src={'/devops.jpeg'} className="w-[10rem] h-[10rem] md:w-[16rem] md:h-[16rem] lg:w-[20rem] lg:h-[20rem]  rounded-full border bg-blue-50 p-2  shadow-2xl" />
              </div>
              <div className="w-full lg:w-[70%] flex justify-start items-center">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-accent-content text-start font-serif">DevOps</h1>
                  <p className="text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-content text-accent-content p-8 m-4 md:m-10 lg:m-16 rounded-xl flex justify-center items-center">
            <div className="flex flex-col md:flex-row gap-[18px] md:gap-0 lg:gap-7">
              <div className="w-full lg:w-[30%] flex justify-center items-center order-first md:order-last">
                <Image width={500} height={500} alt="" src={'/qa2.jpeg'} className="w-[10rem] h-[10rem] md:w-[16rem] md:h-[16rem] lg:w-[20rem] lg:h-[20rem] object-cover rounded-full border bg-black/5 p-2  shadow-2xl" />
              </div>
              <div className="w-full lg:w-[70%] flex justify-start items-center">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-accent-content text-start font-serif">Quality assurance (QA)</h1>
                  <p className="text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral text-accent-content p-8 m-4 md:m-10 lg:m-16 rounded-xl ">
            <div className="flex flex-col md:flex-row gap-[18px] md:gap-0 lg:gap-7">
              <div className="w-full lg:w-[30%] flex justify-center items-center">
                <Image width={500} height={500} alt="" src={'/datascience.jpg'} className="w-[10rem] h-[10rem] md:w-[16rem] md:h-[16rem] lg:w-[20rem] lg:h-[20rem]  rounded-full border bg-blue-50 p-2  shadow-2xl" />
              </div>
              <div className="w-full lg:w-[70%] flex justify-start items-center">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-accent-content text-start font-serif">Data Science</h1>
                  <p className="text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-content text-accent-content p-8 m-4 md:m-10 lg:m-16 rounded-xl flex justify-center items-center">
            <div className="flex flex-col md:flex-row gap-[18px] md:gap-0 lg:gap-7">
              <div className="w-full lg:w-[30%] flex justify-center items-center order-first md:order-last">
                <Image width={500} height={500} alt="" src={'/ai2.jpg'} className="w-[10rem] h-[10rem] md:w-[16rem] md:h-[16rem] lg:w-[20rem] lg:h-[20rem] object-cover rounded-full border bg-black/5 p-2  shadow-2xl" />
              </div>
              <div className="w-full lg:w-[70%] flex justify-start items-center">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-accent-content text-start font-serif">Artificial Intelligence (AI)</h1>
                  <p className="text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, amet! Assumenda numquam autem eius. Quidem repellendus at earum sint illum ab distinctio, corporis odio. Voluptates ex est dolores corporis eligendi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}