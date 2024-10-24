import React from "react";
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
  } from "@heroicons/react/24/outline";
 

  // import Audio from "../audio/audio";

  import Team from "../team/team";
  import FAQ from "../Faq/faq";
  const features = [
    {
        name: "Cloud Services",
        description:
            "Our platform offers scalable cloud services that allow seamless integration and deployment of blockchain applications, ensuring high availability and performance.",
        icon: CloudArrowUpIcon,
    },
    {
        name: "Data Security",
        description:
            "We implement robust security measures to protect your data, utilizing encryption, secure access controls, and compliance with industry standards to safeguard your digital assets.",
        icon: LockClosedIcon,
    },
    {
        name: "Team Management",
        description:
            "Our team management processes utilize Agile methodologies to enhance collaboration, streamline communication, and ensure effective project delivery across all teams.",
        icon: ArrowPathIcon,
    },
    {
        name: "Advanced Data Sequencing",
        description:
            "Utilizing advanced algorithms, we provide sophisticated data sequencing capabilities to enhance data processing and analytical insights for informed decision-making.",
        icon: FingerPrintIcon,
    },
];

  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 thousand' },
    { id: 2, name: 'Assets under holding', value: '$119 ' },
    { id: 3, name: 'New users annually', value: '46,00' },
  ]


export default function Feature(){


 return(
        
    <>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Empower Your Business
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Solutions Customized for You
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We provide cutting-edge cloud services, 
          robust data security, and advanced analytics to help your 
          business thrive. Our expert team ensures seamless project management and deployment, allowing you to focus on your core operations. 
          Transform your digital landscape with our innovative solutions designed for scalability and efficiency.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>


    <div>
     
     {/* status component stacks */}
     <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
      

    </div>
   
   {/* new section Bento */}
   <div className="bg-gray-50 py-24 sm:py-32">
  <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 className="text-center text-base/7 font-semibold text-indigo-600">
      Delivering Tailored Solutions
    </h2>
    <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
      Comprehensive Services for Your Business Needs
    </p>
    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

      {/* First section: Website Development */}
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
              Website Development
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              We design and develop websites that enhance user experience and drive business growth.
            </p>
          </div>
          <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
            <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <img
                className="size-full object-cover object-top"
                src="/pic/laptop 2.jpg"  // Change this URL to your new image
                alt="Website Development"
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
      </div>

      {/* Second section: Blockchain Solutions */}
      <div className="relative max-lg:row-start-1">
        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
              Blockchain Solutions
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              Our blockchain solutions provide transparency, security, and efficiency for your business operations.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
            <img
              className="w-full max-lg:max-w-xs"
              src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"  // Blockchain image
              alt="Blockchain Solutions"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
      </div>

      {/* Third section: Security Services */}
      <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div className="absolute inset-px rounded-lg bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
              Security Services
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              We implement robust security measures to protect your business data and ensure compliance.
            </p>
          </div>
          <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
            <img
              className="h-[min(152px,40cqw)] object-cover object-center"
              src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"  // Security image
              alt="Security Services"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
      </div>

      {/* Fourth section: Team Performance Enhancement */}
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
              Team Performance Enhancement
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              We provide tools and strategies to boost team performance and collaboration for optimal productivity.
            </p>
          </div>
          <div className="relative min-h-[30rem] w-full grow">
            <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
              <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                  <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                    Services
                  </div>
                  <div className="border-r border-gray-600/10 px-4 py-2">About</div>
                </div>
              </div>
              <div className="px-6 pb-14 pt-6">
                <img
                  src="/pic/lap.jpg"
                  alt="image"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
      </div>

    </div>
  </div>
</div>

 
   {/* Testimonial section */}
   <div>
  <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <img
        alt=""
        src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
        className="mx-auto h-12"
      />
      <figure className="mt-10">
        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p>
            “Working with our team has been a transformative experience. Their expertise in website development and blockchain integration has greatly improved our operational efficiency and security.”
          </p>
        </blockquote>
        <figcaption className="mt-10">
          <img
            alt="Rajat Cheetri"
            src="/pic/team/4.jpg"
            className="mx-auto h-52 w-52 rounded-lg"
          />
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="font-semibold text-gray-900">John Doe</div>
            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
              <circle r={1} cx={1} cy={1} />
            </svg>
            <div className="text-gray-600">Senior Developer</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</div>


   {/* our work */}
   <div className="my-5">
  <section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        Our Portfolio
      </h1>

      <p className="mt-4 text-center text-black text-lg">
        Discover our diverse range of projects that showcase our expertise in web development and design. From innovative websites to stunning UI kits, we bring your vision to life with creativity and precision.
      </p>

      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        <div
          className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')",
          }}
        >
          <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
            <h2 className="mt-4 text-xl font-semibold text-white capitalize">Stunning Website Collections</h2>
            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">Websites</p>
          </div>
        </div>

        <div
          className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')",
          }}
        >
          <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
            <h2 className="mt-4 text-xl font-semibold text-white capitalize">Comprehensive UI Kit Collections</h2>
            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">UI Kits</p>
          </div>
        </div>

        <div
          className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
            <h2 className="mt-4 text-xl font-semibold text-white capitalize">Diverse Mobile Mockup Designs</h2>
            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">Mockups</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    
    {/* Team section */}
    <div>
      <Team/>

    </div>

      {/* Testimonial */}
      <div>
  <section className="bg-white ">
    <div className="max-w-6xl px-6 py-10 mx-auto">
      <p className="text-xl font-medium text-blue-500">Testimonials</p>

      <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        What Our Clients Are Saying
      </h1>

      <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
        <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

        <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
          <img
            className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
            src="/pic/team/1.jpg"
            alt="client photo"
          />

          <div className="mt-2 md:mx-6">
            <div>
              <p className="text-xl font-medium tracking-tight text-white">Emma Watson</p>
              <p className="text-blue-200">Marketing Manager at Stech</p>
            </div>

            <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
              “Working with this team has been a game changer for our business. Their innovative approach to web development and marketing strategies has significantly boosted our online presence and engagement. Highly recommend their services!”
            </p>
          </div>
        </div>
      </main>
    </div>
  </section>
</div>


    {/* FAQ */}
    <div>
      <FAQ/>
    </div>
     {/* <div className=" flex justify-center items-center">
        <Audio
        // autoPlay
        // src="http://example.com/audio.mp3" // Replace with your audio file URL
        // onPlay={(e) => console.log("onPlay")}
        // loop
        // muted={false}
        // showSkipControls={true}
        // showDownloadProgress={true}
        // timeFormat="mm:ss"
        
        />
     </div> */}

    </>












 );


}





