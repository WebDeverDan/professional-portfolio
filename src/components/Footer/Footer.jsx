import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Slide, Zoom } from "react-awesome-reveal";

const Footer = () => {
  return (
    <Container id="footer">
      <Profile>
        <div className="links">
          <h1>Contact:</h1>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:danielbvideo@gmail.com">danielbvideo@gmail.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Useful Links:</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://github.com/WebDeverDan">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.linkedin.com/in/daniel-bradley828/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
      </Profile>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;

  .links {
    h1 {
      font-size: 1.9rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        font-size: 1.1rem;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;
      width: 20%;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2.42rem;
        height: 2.42rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
          font-size: 1.21em;
        }
      }
    }
  }
`;
