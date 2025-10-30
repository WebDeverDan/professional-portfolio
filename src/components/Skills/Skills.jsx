import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <Container id="skills">
      {/* <Slide direction="down"> */}
        <h1>My Tools</h1>
      {/* </Slide> */}
      <br/>
      <Slide direction="left" id="tools">
            <p>Ruby on Rails | Salesforce Development | Javascript | JQuery | Node | React | HTML | CSS | Bootstrap | PostgreSQL | MySQL | Github | Bitbucket | Heroku | Digital Ocean | Jira | Agile </p>
      </Slide>
        <div className="toolbox">
            <img src="/react-portfolio/images/icons8-ruby-48.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-ruby-on-rails-64.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-javascript-48.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-jquery-50.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-node-js-48.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-react-native-48.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-html-48.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-css-100.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-bootstrap-48.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-mongodb-48.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-graphql-48.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-postgresql-48.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-mysql-50 (1).png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-github-50.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-bitbucket-48.png" class='codeIcon'></img>
            <img src="/react-portfolio/images/icons8-heroku-48.png" class='codeIcon'></img>
        </div>
        <Slide direction="right" id="tools">
            <p>For additional tools and skills, please request my resume via the email below</p>
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

