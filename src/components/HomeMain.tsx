import Image from "next/image";

export default function HomeMain() {
  return (<>
    <div className="bg-base-content text-accent-content py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[90%] md:max-w-3xl lg:max-w-7xl mx-auto">
        <div>
          <Image src="/images/home/home1.jpg" width={600} height={600} alt="Main Image" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">Excellence in Web Development</h2>
          <p className="leading-5 md:leading-6 lg:leading-7 text-xs md:text-sm lg:text-base ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nihil, in eos fugit quam, itaque, soluta illo hic accusantium obcaecati laudantium ipsam maxime repellat tempore nobis voluptatibus nulla. Aut, natus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nihil, in eos fugit quam, itaque, soluta illo hic accusantium obcaecati laudantium ipsam maxime repellat tempore nobis voluptatibus nulla. Aut, natus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusamus.
          </p>
          <p className="leading-5 md:leading-6 lg:leading-7 text-xs md:text-sm lg:text-base mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nihil, in eos fugit quam, itaque, soluta illo hic accusantium obcaecati laudantium ipsam maxime
          </p>

          <div className="grid grid-cols-4 gap-4 mt-4 text-center">
            <div className="flex flex-col items-center bg-black/5 p-2 rounded-md">
              <Image src={'/seo_logo.png'} width={500} height={500} alt="SEO" className="w-16 " />
            </div>
            <div className="flex flex-col items-center bg-black/5 p-2 rounded-md">
              <Image src={'/sd_logo.png'} width={500} height={500} alt="SEO" className="w-16 " />
            </div>
            <div className="flex flex-col items-center bg-black/5 p-2 rounded-md">
              <Image src={'/ui_ux_logo.png'} width={500} height={500} alt="SEO" className="w-16 " />
            </div>
            <div className="flex flex-col items-center bg-black/5 p-2 rounded-md">
              <Image src={'/ds_logo.png'} width={500} height={500} alt="SEO" className="w-16 " />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0 p-2">
        <div className="flex justify-center items-center">
          <div>
            <Image src={'/images/home/home1.jpg'} width={500} height={500} alt="home" className="w-[20rem] lg:w-[28rem]" style={{ borderRadius: '49% 51% 67% 33% / 46% 51% 49% 54% ', boxShadow: '2px 1px 10px black' }} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <p className="font-semibold text-sm lg:text-xl">
              Your premier destination for cutting-edge website design and web development services. As a top-tier company with a strong presence in both India and the USA, we are committed to delivering the finest web development solutions to businesses and startups across the globe. With an unwavering dedication to excellence, we guarantee a 100% project delivery rate.
            </p>
            <div className="flex justify-center items-center mt-4 ">
              <div className="grid grid-cols-4 bg-black/5 rounded-md p-4" style={{ boxShadow: '2px 1px 6px greay' }}>
                <div>
                  <div className="flex justify-center items-center">
                    <Image src={'/seo_logo.png'} width={500} height={500} alt="SEO" className="w-10 lg:w-16 opacity-90" />
                  </div>
                  <h2 className="font-normal lg:font-medium text-xs font-sans text-center">SEO</h2>
                </div>
                <div>
                  <div className="flex justify-center items-center">
                    <Image src={'/sd_logo.png'} width={500} height={500} alt="SD" className="w-10 lg:w-16 opacity-90" />
                  </div>
                  <h2 className="font-normal lg:font-medium text-xs font-sans text-center">Software Development</h2>
                </div>
                <div>
                  <div className="flex justify-center items-center">
                    <Image src={'/ui_ux_logo.png'} width={500} height={500} alt="SD" className="w-10 lg:w-16 opacity-90" />
                  </div>
                  <h2 className="font-normal lg:font-medium text-xs font-sans text-center">UI/UX Design</h2>
                </div>
                <div>
                  <div className="flex justify-center items-center">
                    <Image src={'/ds_logo.png'} width={500} height={500} alt="SEO" className="w-10 lg:w-16 opacity-90" />
                  </div>
                  <h2 className="font-normal lg:font-medium text-xs font-sans text-center">Data Science</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </>)
}