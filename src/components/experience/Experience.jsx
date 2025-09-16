import React from 'react'
import img_experience from '../../assets/img_experience.png'

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden flex flex-col text-gray-600 body-font"
    >
      <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full "></div>
        <div className="h-96 w-96 bg-gradient-to-r from-[#ff910a] blur-2xl opacity-40 rounded-full "></div>
      </div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0"
        >
          <div className="md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute  rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0"></div>
          <img
            src={img_experience}
            className="object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10"
            alt="Experience"
          />
        </div>
        {/* *** Experience *** */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center "
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 ">
            Experience
          </h1>

          <h2 className="title-font font-bold text-white sm:text-2xl">
            TechnoTal | 2023 - 2024
          </h2>
          <ul className="mb-8 text-white leading-relaxed p-4">
            <li className="p-1">
              <strong>Plan, design and develop</strong> an App that will be used
              as a wallet for crypto-currency.
            </li>
            <li className="p-1">
              Building an App using <strong>React</strong> for efficient user
              interfaces, <strong>Redux</strong> for state management, and{' '}
              <strong>JavaScript</strong>.
            </li>
            <li className="p-1">
              Estimating projects scopes and timelines while staying on
              schedule.
            </li>
            <li className="p-1">
              Integrated real-time data through external{' '}
              <strong>libraries</strong> and <strong>RESTful APIs</strong>
              to enhance system functionality.
            </li>
            <li className="p-1">
              Developing <strong>responsive</strong> App, ensuring good user
              experiences across various devices and screen sizes.
            </li>
            <li className="p-1">
              Utilizing <strong>GitHub</strong> for version control,
              collaboration, and code management.
            </li>
            <li className="p-1">
              Utilizing <strong>SASS</strong> for efficient and maintainable{' '}
              <strong>CSS</strong> styling, optimizing the scalability of the
              projects.
            </li>
          </ul>

          {/* <h2 className='title-font font-bold text-white sm:text-2xl'> 2024 :</h2>
             <p className='mb-8 text-white leading-relaxed '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, optio.</p>
    */}
        </div>
      </div>
    </section>
  )
}
