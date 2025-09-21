import React from 'react'
import Navbar from '../navbar/Navbar'
import hi from '../../assets/hi.png'
import CV from './CV.pdf'
import img from '../../assets/img.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'



/* maybe this instead:
I'm passionate about building clean, user-friendly applications and always eager to learn, grow, and tackle complex challenges.
As a team player, I thrive in collaborative environments where I can contribute, share knowledge, and keep improving my skills.
*/

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      {/* <div className="md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)] "></div> */}
      {/* right-0 -top-20 */}

      <div className="absolute w-[720px] h-[720px] md:w-[640px] md:h-[640px] right-0 -top-00 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 rounded-full transform rotate-12 shadow-[0_0_40px_rgb(255,165,0,0.4)]"></div>

      <Navbar />

      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
            <img
              src={hi}
              data-aos="fade-up"
              data-aos-delay="400"
              className=" top-[350px] left-44 md:top-[30px] md:left-[450px] transform-translate-x-1/2 -translate-y-1/2 w-20 h-20 "
            />

            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-white">
              I'm Mickael Lepicier
            </h1>
            <h3 className="title-font sm:text-2xl text-2xl mb-4 font-semibold text-white">
              Fullstack Developer
            </h3>
            <p className="mb-8 leading-relaxed">
              I'm passionate about building clean, user-friendly applications
              and always eager to learn, grow, and tackle complex challenges.
            </p>

            <div className="flex justify-center">

              <a href="https://www.linkedin.com/in/mickael-lepicier/" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex py-1 px-4 text-lg">
                  <img src={linkedin} alt="LinkedIn" className="w-8 h-8 text-lg focus:outline-none hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-lg" /> 
                </button>
              </a>

              <a href="https://github.com/MickaelLepicier" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex py-1 px-4 text-lg">
                  <img src={github} alt="GitHub" className="w-8 h-8 text-lg focus:outline-none hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-lg" /> 
                </button>
              </a>
              <a href={CV} download>
                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-lg">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={img}
              alt="hero"
              className="object-cover object-center rounded-full mx-auto w-60 h-60 sm:w-64 sm:h-64 md:w-80 md:h-80"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
