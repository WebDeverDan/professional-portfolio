import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : `${process.env.PUBLIC_URL}/images/pgr_site.png`,
        disc : "Site Rebuild for Large Scale Solar Company",
        name: "Company Site Rebuild",
        url: "https://pinegaterenewables.com/"
    },
     {
        img : `${process.env.PUBLIC_URL}/images/giving_site.png`,
        disc : "Charity Site for Large Scale Solar Company",
        name: "Company Charity Site",
        url: "https://pinegategiving.org/"
    },
    {
        img : `${process.env.PUBLIC_URL}/images/campsite-finder.png`,
        disc : "Campsite Finder",
        name: "Recreation.gov API Campsite Finder",
        url: "https://campsite-availabilty-checker.onrender.com/",
    },
    {
        img : `${process.env.PUBLIC_URL}/images/time_zones.png`,
        disc : "Interactive Time Zone Map",
        name: "Time Zone Map",
        url: "https://webdeverdan.github.io/timezone-display/",
    },
    {
        img : "https://res.cloudinary.com/app-photo-storage/image/upload/v1687647252/ox8joga58rzav9wt0bj8.png",
        disc : "Simple Mobile-First App to Calculate Cost and Profit for Baked Goods",
        name: "Baking Profit Calculator",
        url: "https://webdeverdan.github.io/baker-cost-profit-calculator/",
    },
    {
        img : "https://res.cloudinary.com/app-photo-storage/image/upload/v1687647359/cufzkrksnsaahkaralvd.png",
        disc : "Simple Web App for Checking Weather of a Location",
        name: "Weather App",
        url: "https://webdeverdan.github.io/Weather-Dashboard/",
    },
    {
        img : "https://res.cloudinary.com/app-photo-storage/image/upload/v1687650904/eupky20kmobti7fsf1u3.png",
        disc : "A Daily Planning App",
        name: "Daily Planner",
        url: "https://webdeverdan.github.io/Daily-Planner/",
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
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