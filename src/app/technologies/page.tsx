import { Metadata } from "next";
import Image from "next/image";
import { CgVercel } from "react-icons/cg";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaBootstrap, FaCcStripe, FaCloudflare, FaCss3Alt, FaDocker, FaGithub, FaGitlab, FaHtml5, FaJava, FaNodeJs } from "react-icons/fa";
import { FaComputer, FaJenkins } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { RiReactjsFill, RiSupabaseFill } from "react-icons/ri";
import { SiAmazonrds, SiApachemaven, SiDatadog, SiFastapi, SiGradle, SiHasura, SiKubernetes, SiMui, SiOpenapiinitiative, SiPlaywright, SiRadixui, SiRasa, SiSpring, SiStrapi, SiTailwindcss } from "react-icons/si";

export const metadata: Metadata = {
  title: 'Technologies PLPL Infotech & Infra Private Limited',
  description: 'Technologies PLPL Infotech & Infra Private Limited',
}

export default function Technologies() {
  return (
    <div className="bg-secondary-content">
      <div className="pt-[4.8rem] pb-[2rem] md:pt-[6.2rem] md:pb-[2.5rem] lg:pt-[7.6rem] lg:pb-[3.2rem]">
        <div>
          <div>
            <div className="text-center text-accent-content">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Technologies</h2>
              <div className="flex justify-center items-center mx-4 md:mx-0">
                <p className="w-full md:w-[70%] text-sm md:text-base lg:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae iure, dignissimos id adipisci cumque culpa ratione ea, possimus cum veniam blanditiis asperiores beatae illum reprehenderit et quasi. Iure, maiores.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem voluptates vitae illo necessitatibus rem a natus qui corrupti blanditiis aperiam.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                  <div>
                    <div className="p-6 border-box-one bg-error-content text-black rounded-md shadow-md border-gray border-2 ">
                      <h2 className="text-center font-bold text-xl md:text-2xl lg:text-3xl mb-4">Frontend Development</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <FaHtml5 className="text-xl md:text-3xl text-[#E96228]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">HTML</h1>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <FaCss3Alt className="text-xl md:text-3xl text-[#264BE0]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">CSS</h1>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <RiReactjsFill className="text-xl md:text-3xl text-[#00D1F7]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">ReactJS</h1>
                          </div>
                        </div>

                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <Image src={'/chartjs.ico'} width={500} height={500} alt="ChartJs" className="w-[1.5rem] md:w-[2rem]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">ChartJS</h1>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <SiRadixui className="text-xl md:text-3xl" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">Radix-UI</h1>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <FaBootstrap className="text-xl md:text-3xl text-[#7B11F3]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">Bootstrap</h1>
                          </div>
                        </div>

                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <SiMui className="text-xl md:text-3xl text-[#007BF7]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">Material UI</h1>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <Image src={'/daisyui_logo.jpg'} width={500} height={500} alt="daisyui" className="w-[1.5rem] md:w-[2rem] mt-[-1px]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">DaisyUI</h1>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <SiTailwindcss className="text-xl md:text-3xl text-[#36B7F0]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">Tailwind CSS</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="p-6 border-box-two bg-error-content text-black rounded-md shadow-md border-gray border-2 ">
                      <h2 className="text-center font-bold text-xl md:text-2xl lg:text-3xl mb-4">Backend Development</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <FaNodeJs className="text-xl md:text-3xl text-[#6FA660]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">NodeJS</h1>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <FaJava className="text-xl md:text-3xl text-[#E51F24]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">Java</h1>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <Image src={'/python_logo.png'} width={500} height={500} alt="python_logo" className="w-[1rem] md:w-[2rem] mt-[-1px]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">Python</h1>
                          </div>
                        </div>

                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <SiFastapi className="text-xl md:text-3xl text-black" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">FastAPI</h1>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <SiSpring className="text-xl md:text-3xl text-[#6AAD3D]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">Spring Boot</h1>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <Image src={'/next_auth.png'} width={500} height={500} alt="next_auth" className="w-[1rem] md:w-[2rem] mt-[-1px]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">NextAuth</h1>
                          </div>
                        </div>

                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <SiRasa className="text-xl md:text-3xl text-black" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">RASA</h1>
                          </div>
                        </div>

                        <div className="flex justify-center items-center">
                          <div className="mb-2 flex">
                            <SiStrapi className="text-xl md:text-3xl text-[#442c86]" />
                            <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">Strapi</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="p-6 border-box-three bg-error-content text-black rounded-md shadow-md border-gray border-2 ">
                    <h2 className="text-center font-bold text-xl md:text-2xl lg:text-3xl mb-4">Database</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="flex justify-center items-center">
                        <div className="mb-2 flex">
                          <SiAmazonrds className="text-2xl md:text-3xl text-[#3476BA]" />
                          <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">AmazonRDS</h1>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="mb-2 flex">
                          <IoLogoFirebase className="text-2xl md:text-3xl text-[#F8931E]" />
                          <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">Firebase</h1>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="mb-2 flex">
                          <RiSupabaseFill className="text-2xl md:text-3xl text-[#3FC78C]" />
                          <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">Supabase</h1>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="mb-2 flex">
                          <SiHasura className="text-2xl md:text-3xl text-[#3970FD]" />
                          <h1 className="text-sm md:text-base lg:text-xl font-bold text-center">Hasura</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center text-accent-content mt-6 md:mt-10">
            <div className="m-2 border-box-four bg-error-content p-10 rounded-md w-[90%]">
              <div className="flex justify-center items-center">
                <div className=" flex gap-2">
                  <FaComputer className="text-xl md:text-4xl text-black mt-[6px] md:mt-0" />
                  <h2 className="text-black font-bold text-[22px] lg:text-3xl text-center mt-0 md:mt-1 lg:mt-0 mb-4 md:mb- lg:mb-4">Other Technologies</h2>
                </div>
              </div>
              <div className="join join-vertical w-full text-black">
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg md:text-xl font-bold">
                    Authentication and Authorization
                  </div>
                  <div className="collapse-content">
                    <ul className="font-bold text-base lg:text-base ml-4 md:ml-6">
                      <li className="flex gap-3"><Image src={'/next_auth.png'} width={500} height={500} alt="next_auth" className="w-[1.5rem] mt-[-1px]" />NextAuth</li>
                      <li className="flex gap-3 mt-2"><SiSpring className="text-2xl text-green-600" /> Spring Security  </li>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg md:text-xl font-bold">
                    Payment Processing
                  </div>
                  <div className="collapse-content">
                    <ul className="font-bold text-base lg:text-base ml-4 md:ml-6">
                      <li className="flex gap-3"><FaCcStripe className="text-3xl text-[#4d5ae4]" /> Stripe </li>
                      <li className="flex gap-3 mt-2"><Image src={'/chargebee_logo.png'} width={500} height={500} alt="chargebee_logo" className="w-[1.5rem] mt-[-1px]" /> Chargebee </li>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg md:text-xl font-bold">
                    Cloud Services and Deployment
                  </div>
                  <div className="collapse-content">
                    <ul className="font-bold text-base lg:text-base ml-4 md:ml-6">
                      <li className="flex"><CgVercel className="text-3xl mt-[-3px] text-black" /> Vercel</li>
                      <li className="flex gap-3"><FaCloudflare className="text-3xl text-[#F58220] mt-[-3px]" /> Cloudflare</li>
                      <li className="flex gap-3 mt-2"><SiAmazonrds className="text-2xl text-[#3476BA]" /> Amazon RDS</li>
                      <li className="flex gap-3 mt-2"><IoLogoFirebase className="text-2xl text-[#F8931E]" /> Firebase</li>
                      <li className="flex gap-3 mt-2"><FaDocker className="text-2xl text-[#086AD0]" /> Docker</li>
                      <li className="flex gap-3 mt-2"> <SiKubernetes className="text-2xl text-[#3069DE]" /> Kubernetes</li>
                      <li className="flex gap-2 mt-2"><Image src={'/lang_chain_logo.png'} width={500} height={500} alt="lang_chain_logo" className="w-[2.5rem]" /> LangChain</li>
                      <li className="flex gap-3 mt-2"><SiDatadog className="text-2xl text-black" /> DataDog</li>
                      <li className="flex gap-3 mt-2"><SiPlaywright className="text-2xl text-[#208E25]" /> Playwright</li>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg md:text-xl font-bold">
                    Version Control and CI/CD
                  </div>
                  <div className="collapse-content">
                    <ul className="font-bold text-base lg:text-base ml-4 md:ml-6">
                      <li className="flex gap-3"><FaGithub className="text-xl text-black" /> GitHub </li>
                      <li className="flex gap-3 mt-2"><FaGitlab className="text-xl text-[#FB6D27]" /> Gitlab </li>
                      <li className="flex gap-3 mt-2"> <FaJenkins className="text-xl text-black" /> Jenkins</li>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg md:text-xl font-bold">
                    Build Tools
                  </div>
                  <div className="collapse-content">
                    <ul className="font-bold text-base lg:text-base ml-4 md:ml-6">
                      <li className="flex gap-3"><SiGradle className="text-3xl mt-[-4px] text-[#022E38]" /> Gradle</li>
                      <li className="flex gap-3 mt-2"><SiApachemaven className="text-2xl mt-[2px] text-[#CD2137]" /> Maven</li>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg md:text-xl font-bold">
                    Email Services
                  </div>
                  <div className="collapse-content">
                    <ul className="font-bold text-base lg:text-base ml-4 md:ml-6">
                      <li className="flex gap-3"><Image src={'/send_grid_logo.png'} width={500} height={500} alt="send_grid_logo" className="w-[1.5rem] mt-[-5px]" /> SendGrid </li>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg md:text-xl font-bold">
                    Monitoring and Analytics
                  </div>
                  <div className="collapse-content">
                    <ul className="font-bold text-base lg:text-base ml-4 md:ml-6">
                      <li className="flex gap-3 "><SiDatadog className="text-2xl text-black" /> DataDog </li>
                      <li className="flex gap-3 mt-2"><DiGoogleAnalytics className="text-2xl text-[#4a74ff]" /> Google Analytics  </li>
                    </ul>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-lg md:text-xl font-bold">
                    API Development
                  </div>
                  <div className="collapse-content">
                    <ul className="font-bold text-base lg:text-base ml-4 md:ml-6">
                      <li className="flex gap-3"><SiFastapi className="text-xl text-black" /> FastAPI</li>
                      <li className="flex gap-3 mt-2"><SiOpenapiinitiative className="text-xl text-[#8FCF0A]" /> OpenAPI </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}