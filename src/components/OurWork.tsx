import Image from "next/image";

export default function OurWork() {
  const projects = [
    {
      title: "Empowering Brands with SEO Mastery",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum voluptate vitae optio quia aperiam adipisci, tempora ab officiis eligendi.",
      image: '/images/home/laptop_one.jpg',
      alt: 'SEO Project',
    },
    {
      title: "Leading Futuristic Software Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum voluptate vitae optio quia aperiam adipisci, tempora ab officiis eligendi.",
      image: '/images/home/laptop_two.jpg',
      alt: 'Software Development Project',
    },
    {
      title: "Designing Engaging Digital Journeys",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum voluptate vitae optio quia aperiam adipisci, tempora ab officiis eligendi.",
      image: '/images/home/laptop_three.jpg',
      alt: 'UI/UX Design Project',
    },
    {
      title: "Guiding Business with Data Science Brilliance",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum voluptate vitae optio quia aperiam adipisci, tempora ab officiis eligendi.",
      image: '/images/home/laptop_four.jpg',
      alt: 'Data Science Project',
    },
  ];
  return (
    <div className="p-10 bg-neutral-content text-accent-content">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-0 md:mb-4 mt-4">Our Works</h2>
      <p className="text-center md:text-center mx-auto mb-8 text-xs md:text-sm lg:text-base ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ab dolorem, libero expedita beatae cum harum veniam. Earum, ex alias! Dolorum amet vero quisquam, expedita totam laborum mollitia excepturi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ab dolorem, libero expedita beatae cum harum veniam. Earum, ex alias! Dolorum amet vero quisquam, expedita totam laborum mollitia excepturi.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-base-300 rounded-md overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-500" >
            <div className="relative h-40">
              <Image src={project.image} layout="fill" objectFit="cover" alt={project.alt} />
            </div>
            <div className="px-6 py-4">
              <h2 className="text-base font-bold mb-2">{project.title}</h2>
              <p className="text-xs md:text-sm lg:text-base ">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

