import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h1 className="green">Daniel Bradley</h1>
          <h3>Full Stack Web Developer</h3>
          <p className="description">
          Full-stack web developer specializing in Ruby on Rails development, Salesforce administration, and WordPress web solutions.Experienced in designing and deploying robust REST APIs and business solutions. Skilled in both frontend and backend development, Salesforce tools, project management, and multimedia production. Multilingual (Spanish and Korean). Recognized for delivering measurable business value, quick-action on delivery, and effective cross-team collaboration.          </p>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={`${process.env.PUBLIC_URL}/images/Daniel_Bradley.8b243bd5.jpg`}
            alt="profile"
            className="profile-photo"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  padding-top: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    color: #9ab0c9;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    color: #fff
  }
  p {
    font-weight: 300;
    font-size: 1.1rem;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20rem;
    filter: drop-shadow(0 0 0.75rem #9ab0c9);
    transition: transform 400ms ease-in-out;
    padding: 1em;
    padding-top: 1em;
    margin-top: 3em;
    border-radius: 5px;

    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 75%;
    }
  }
  // :hover img {
  //   transform: translateY(-10px);
  // }
`;
