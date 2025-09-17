import React, { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image from '../../assets/mineSweeper.png'
import image2 from '../../assets/misterbeat.png'
import image3 from '../../assets/in_progress.png'

export default function Projects() {
  const listProjects = [
    {
      id: 1,
      image: image,
      title: 'Minesweeper',
      description:
        'A LEGO style Minesweeper game. Uncover tiles, avoid the bombs, and clear the board just like the original retro game!',
      stack: ['JavaScript', 'CSS', 'HTML']
    },
    {
      id: 2,
      image: image2,
      title: 'MisterBeat',
      description:
        'A Spotify-clone music app with playlists, real-time collaboration, and secure accounts.',
      stack: [
        'React.js',
        'Node.js',
        'Express',
        'MongoDB',
        'WebSockets',
        'CSS',
      ]
    }, 
    // {
    //   id: 3,
    //   image: image3,
    //   title: 'Project 3',
    //   description: 'Project 3 description bla bla',
    //   stack: []
    // }

    // {
    //   id: 4,
    //   image: image3,
    //   title: 'Project 4',
    //   description: 'Project 4 description bla bla'
    // }
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: checkWidth(), // Number of the cards that is shown
    slidesToScroll: 1,
    arrows: true

    // The responsive method didn't work
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 780,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   }
    // ]
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.dispatchEvent(new Event('resize'));
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, []);

  // console.log('window width:', window.innerWidth)
  // console.log('checkWidth():', checkWidth())

  function checkWidth() {
    const width = window.innerWidth

    // For Desktop
    if (width > 1024) return 3
    // For Tablets
    if (width > 780) return 2
    // For Mobile
    return 1
  }

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className="relative overflow-hidden flex flex-col text-white body-font "
    >
      <div className="container px-5 py-24 mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <Slider {...settings}>
          {listProjects.map((project) => {
            return (
              <div key={project.id} className="p-4 group cursor-pointer">
                <div className="h-full border-2 border-orange-400 shadow-md border-opacity-60 rounded-lg overflow-hidden transform transition duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_12px_30px_rgba(34,211,238,0.35)] group-hover:border-cyan-400">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[200px] object-cover object-center"
                  />
                  <div className="p-6 h-[255px] overflow-y-auto">
                    <h2 className="tracking-widest text-xl title-font font-medium text-gray-400 mb-2">
                      {project.title}
                    </h2>
                    <p className="leading-relaxed mb-3">
                      {project.description}
                    </p>
                    {project.stack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.stack.map((tech, idx) => (
                          <span
                            key={`${project.id}-tech-${idx}`}
                            className="border border-cyan-300 rounded-md px-2 py-1 text-sm text-cyan-200 transition-colors duration-200 hover:bg-cyan-500 hover:text-[#0d182e] hover:border-cyan-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}
