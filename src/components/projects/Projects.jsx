import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image from '../../assets/misterbeat.png'
import image2 from '../../assets/mineSweeper.png'
import image3 from '../../assets/in_progress.png'

export default function Projects() {
  const [activeId, setActiveId] = useState(null)

  // Close overlay when clicking outside any project card
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (activeId === null) return
      const target = event.target
      const insideCard = target.closest && target.closest('[data-project-card]')
      if (!insideCard) setActiveId(null)
    }
    document.addEventListener('mousedown', handleDocumentClick)
    document.addEventListener('touchstart', handleDocumentClick)
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
      document.removeEventListener('touchstart', handleDocumentClick)
    }
  }, [activeId])
  const listProjects = [
    {
      id: 1,
      image: image,
      title: 'MisterBeat',
      description:
        'A Spotify-clone music app with playlists, real-time collaboration, and secure accounts.',
      stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'CSS'],
      open_github: 'https://github.com/MickaelLepicier/sprint4-frontend',
      open_app: 'https://misterbeat.onrender.com/'
    },
    {
      id: 2,
      image: image2,
      title: 'Minesweeper',
      description:
        'A LEGO style Minesweeper game. Uncover tiles, avoid the bombs, and clear the board just like the original retro game!',
      stack: ['JavaScript', 'CSS', 'HTML'],
      open_github: 'https://github.com/MickaelLepicier/mineSweeper1',
      open_app: 'https://mickaellepicier.github.io/mineSweeper1/'
    }
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
                <div
                  className="h-full border-2 border-orange-400 shadow-md border-opacity-60 rounded-lg overflow-hidden transform transition duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_12px_30px_rgba(34,211,238,0.35)] group-hover:border-cyan-400"
                  data-project-card
                  onClick={() =>
                    setActiveId((prev) =>
                      prev === project.id ? null : project.id
                    )
                  }
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-[200px] object-cover object-center transition filter ${
                        activeId === project.id ? 'blur-sm' : 'blur-0'
                      }`}
                    />
                    {/* Darken overlay behind buttons when active */}
                    <div
                      className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${
                        activeId === project.id
                          ? 'opacity-100'
                          : 'opacity-0 pointer-events-none'
                      }`}
                    />
                    {/* Overlay action buttons */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-200 ${
                        activeId === project.id
                          ? 'opacity-100'
                          : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <button
                        type="button"
                        className="flex items-center gap-2 px-3 py-2 border border-cyan-300 text-cyan-200 rounded-md hover:bg-cyan-500 hover:text-[#0d182e] hover:border-cyan-500 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          if (project.open_github) {
                            window.open(
                              project.open_github,
                              '_blank',
                              'noopener,noreferrer'
                            )
                          }
                        }}
                        aria-label="Open GitHub"
                      >
                        {/* GitHub icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.238-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.031 1.532 1.031.892 1.53 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.985 1.029-2.684-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.684 0 3.842-2.337 4.687-4.565 4.936.359.309.678.918.678 1.852 0 1.337-.012 2.416-.012 2.744 0 .268.18.579.688.48A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        GitHub
                      </button>
                    
                      {/* <button
                        type="button"
                        className="flex items-center gap-2 px-3 py-2 border border-cyan-300 text-cyan-200 rounded-md hover:bg-cyan-500 hover:text-[#0d182e] hover:border-cyan-500 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          if (project.open_app) {
                            window.open(
                              project.open_app,
                              '_blank',
                              'noopener,noreferrer'
                            )
                          }
                        }}
                        aria-label="Open project"
                      >
                        {/* External link icon }
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5M8.25 18h-2.5A1.75 1.75 0 0 1 4 16.25v-9.5C4 5.784 4.784 5 5.75 5h9.5C16.216 5 17 5.784 17 6.75v2.5"
                          />
                        </svg>
                        Open
                      </button> */}
                      
                    </div>
                  </div>
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
