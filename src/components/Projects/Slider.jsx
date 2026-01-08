import React, { useRef, useState } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import ProjectModal from './ProjectModal';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : `${process.env.PUBLIC_URL}/images/remembrance_settings.png`,
        disc : "Frontend for Cemetery/Columbarium CMS Platform (Email for Test Admin Credentials)",
        name: "Custom-Developed CMS (Frontend)",
        url: "https://www.st-eugenes.remembrance-sites.com/",
        core_technologies: ["React", "Vite"],
        text: "Click to Explore"
    },
    {
        img : `${process.env.PUBLIC_URL}/images/api_dashboard.png`,
        disc : "Backend for Cemetery/Columbarium CMS Platform (Email for Test Admin Credentials). Scalable for numerous frontends (organization), offers remote access to data (organization settings, security, and records), and provides insights into system uptime/status and database analytics. Email to request test admin credentials",
        name: "Custom-Developed CMS Master Portal and API (API Backend)",
        core_technologies: ["Ruby", "Rails", "Hotwire", "Stimulus", "Render - hosting"],
        text: "Click to Explore"
    },
     {
        img : `${process.env.PUBLIC_URL}/images/pgr_site.png`,
        disc : "Site Rebuild for Large Scale Solar Company",
        name: "Company Site Rebuild",
        url: "https://pinegaterenewables.com/",
        core_technologies: ["WordPress", "Elementor", "Salesforce", "FormAssembly"],
        text: "Click to Explore"
    },
    {
        img : `${process.env.PUBLIC_URL}/images/campsite-finder.png`,
        disc : "Recreation.gov API Campsite Checker",
        name: "Campsite Availability Checker",
        url: "https://campsite-availabilty-checker.vercel.app/",
        core_technologies: ["React", "Recreation.gov API"],
        text: "Click to Explore"
    },
    {
        img : `${process.env.PUBLIC_URL}/images/houndin-around.png`,
        disc : "AI Assisted Rockhounding Spot Finder",
        name: "Houndin' Around",
        url: "https://houndin-around.onrender.com/",
        core_technologies: ["React", "Node.js", "Perplexity API", "Google Maps API","Render - hosting"],
        text: "Click to Explore"
    },
    {
        img : "https://res.cloudinary.com/app-photo-storage/image/upload/v1687647252/ox8joga58rzav9wt0bj8.png",
        disc : "Simple Mobile-First App to Calculate Cost and Profit for Baked Goods",
        name: "Baking Profit Calculator",
        url: "https://webdeverdan.github.io/baker-cost-profit-calculator/",
        core_technologies: ["HTML", "CSS", "JavaScript"],
        text: "Click to Explore"
    },
     {
        img : `${process.env.PUBLIC_URL}/images/shouldIskate.png`,
        disc : "Skate Decision Maker Based on Weather",
        name: "Should I Skate Today?",
        url: "https://webdeverdan.github.io/ShouldISkateToday/",
        core_technologies: ["React", "Open Weather API"],
        text: "Click to Explore"
    },
    {
        img : `${process.env.PUBLIC_URL}/images/time_zones.png`,
        disc : "Interactive Time Zone Map",
        name: "Time Zone Map",
        url: "https://webdeverdan.github.io/timezone-display/",
        core_technologies: ["React", "JavaScript", "CSS"],
        text: "Click to Explore"
    },
    {
        img : "https://res.cloudinary.com/app-photo-storage/image/upload/v1687650904/eupky20kmobti7fsf1u3.png",
        disc : "A Daily Planning App",
        name: "Daily Planner",
        url: "https://webdeverdan.github.io/Daily-Planner/",
        core_technologies: ["JavaScript", "Local Storage"],
        text: "Click to Explore"
    },

];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} onClick={() => handleProjectClick(item)} />
  ))

  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack/></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward/></button>
      </Buttons>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 3rem;
    height: 3rem;
    background-color: #676767;
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
    color: #9ab0c9
  }

  .back{
    left: -1rem;
    color: #9ab0c9
  }
`