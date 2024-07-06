import Image from "next/image";

export default function OurClients() {
  const clientLogo = ["client_1.png", "client_2.png", "client_3.png", "client_4.png", "client_5.png", "client_6.png", "client_7.png", "client_8.png"]
  return (
    <div className="bg-base-200 p-10">
      <div>
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold uppercase text-accent-content">Our Clients</h2>
        <div className="flex justify-center items-center">
          <hr className="text-center border w-[6rem] lg:w-[10.8rem] mt-1 mb-6 border-accent-content  rounded-2xl opacity-80" />
        </div>
      </div>

      <div className="flex justify-center items-center mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
          {
            clientLogo.map((data: any, i: number) => (
              <div key={i} className="transition-transform transform hover:scale-110 duration-500 bg-white p-4 rounded-md flex justify-center items-center w-[20rem] lg:w-[16rem] h-[110px] md:h-[150px] lg:h-[102px]">
                <Image src={`/images/home/${data}`} width={500} height={500} alt="super_unlimited_logo" className="w-[12rem] md:w-[14rem] lg:w-[10rem]" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}