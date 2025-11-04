import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaBitbucket } from 'react-icons/fa';
import { SiRuby, SiRubyonrails, SiJavascript, SiJquery, SiMongodb, SiPostgresql, SiMysql, SiHeroku, SiSalesforce } from 'react-icons/si';

const Skills = () => {
  return (
    <Container id="skills">
      {/* <Slide direction="down"> */}
        <h1>My Tools</h1>
      {/* </Slide> */}
      <br/>
      <Slide direction="left" id="tools">
            <p>Ruby on Rails | Salesforce | Javascript | JQuery | Node | React | HTML | CSS | Bootstrap | PostgreSQL | MySQL | MongoDB | Github | Bitbucket | Heroku | Digital Ocean | Jira | Agile </p>
      </Slide>
        <IconGrid>
            <SiRuby className='codeIcon ruby' title="Ruby" />
            <SiRubyonrails className='codeIcon rails' title="Ruby on Rails" />
            <SiSalesforce className='codeIcon salesforce' title="Salesforce" />
            <SiJavascript className='codeIcon javascript' title="JavaScript" />
            <SiJquery className='codeIcon jquery' title="jQuery" />
            <FaNodeJs className='codeIcon nodejs' title="Node.js" />
            <FaReact className='codeIcon react' title="React" />
            <FaHtml5 className='codeIcon html' title="HTML5" />
            <FaCss3Alt className='codeIcon css' title="CSS3" />
            <FaBootstrap className='codeIcon bootstrap' title="Bootstrap" />
            <SiPostgresql className='codeIcon postgresql' title="PostgreSQL" />
            <SiMysql className='codeIcon mysql' title="MySQL" />
            <SiMongodb className='codeIcon mongodb' title="MongoDB" />
            <FaGithub className='codeIcon github' title="GitHub" />
            <FaBitbucket className='codeIcon bitbucket' title="Bitbucket" />
            <SiHeroku className='codeIcon heroku' title="Heroku" />
        </IconGrid>
        <Slide direction="right" id="tools">
            <p>For additional tools and skills, please request my resume via the email below.</p>
      </Slide>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 0;
  }
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem 0;
  justify-items: center;
  align-items: center;

  .codeIcon {
    width: 64px;
    height: 64px;
    transition: all 300ms ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      filter: brightness(1.2);
    }
  }

  .ruby { color: #CC342D; }
  .rails { color: #CC0000; }
  .salesforce { color: #00A1E0; }
  .javascript { color: #F7DF1E; }
  .jquery { color: #0769AD; }
  .nodejs { color: #339933; }
  .react { color: #61DAFB; }
  .html { color: #E34F26; }
  .css { color: #1572B6; }
  .bootstrap { color: #7952B3; }
  .postgresql { color: #4169E1; }
  .mysql { color: #4479A1; }
  .mongodb { color: #47A248; }
  .github { color: #181717; }
  .bitbucket { color: #0052CC; }
  .heroku { color: #430098; }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: 1.5rem;

    .codeIcon {
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    .codeIcon {
      width: 40px;
      height: 40px;
    }
  }
`;

