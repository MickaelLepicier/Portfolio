import React from 'react'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import nodejs from '../../assets/nodejs.png'
import mongodb from '../../assets/mongodb.png'
import mongoose from '../../assets/mongoose.png'
import express from '../../assets/express.png'
import javascript from '../../assets/javascript.png'
import typescript from '../../assets/typescript.png'
import css from '../../assets/css.png'
import sass from '../../assets/sass.png'

// import redux from '../../assets/react.png'

// import javascript from '../../assets/javascript.png'

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center ">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400 "
        >
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            className="sm:text-4xl text-2xl font-medium title-font mb-2 text-white"
          >
            Skills
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="leading-relaxed text-base "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            consectetur vero illo nostrum debitis tempora iusto fuga,
            necessitatibus ullam officiis unde quos at nesciunt autem explicabo!
            Sapiente atque non voluptatem? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Vel ad sapiente, totam iste, esse illo
            consequuntur deleniti eum autem accusamus magni aliquam illum,
            corrupti reiciendis doloribus. Neque unde minima asperiores. REACT |
            Redux | NodeJS | MongoDB | Mongoose | Express | JavaScript | CSS | Sass
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="flex flex-col md:w-1/2 md:pl-12"
        >
          <nav className="flex flex-wrap list-none -mb-1">
            <li className="lg:w-1/3 mb-4 w-1/2 ">
              <img
                src={react} // REACT icon
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2 ">
              <img
                src={redux} // Redux icon
                alt=""
                className=" w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2 ">
              <img
                src={nodejs} // Node.JS icon
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2 ">
              <img
                src={mongodb} // MongoDB icon
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2 ">
              <img
                src={mongoose} // Mongoose icon
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2 ">
              <img
                src={express} // Express icon
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2 ">
              <img
                src={javascript} // JavaScript icon
                alt=""
                className=" w-24 h-24 object-cover"
              />
            </li>

            {/* <li className="lg:w-1/3 mb-4 w-1/2 ">
              <img
                src={typescript} // TypeScript icon
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li> */}

            <li className="lg:w-1/3 mb-4 w-1/2 ">
              <img
                src={css} // CSS icon
                alt=""
                className=" w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2 ">
              <img
                src={sass} // Sass icon
                alt=""
                className=" w-24 h-24 object-cover"
              />
            </li>

            {/* 

            <li className="lg:w-1/3 mb-4 w-1/2 ">
              <img
                src={html} // HTML icon
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li> 
            
            */}
          </nav>
        </div>
      </div>
    </section>
  )
}
