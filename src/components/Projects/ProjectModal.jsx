import React from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const { img, disc, name, url, core_technologies } = project;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IoClose />
        </CloseButton>

        <ModalImage src={img} alt={name} />

        <ModalBody>
          <h2>{name}</h2>
          <p>{disc}</p>

          {core_technologies && core_technologies.length > 0 && (
            <TechnologiesSection>
              <h3>Technologies</h3>
              <TechList>
                {core_technologies.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechList>
            </TechnologiesSection>
          )}

          {url && (
            <DeploymentLink href={url} target="_blank" rel="noopener noreferrer">
              View Live Project
            </DeploymentLink>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  border: solid;
`;

const ModalContent = styled.div`
  background-color: #4e5156;
  border-radius: 18px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border: solid #ffffff 1px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(103, 103, 103, 0.8);
  border: none;
  color: #9ab0c9;
  font-size: 2rem;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 1;

  &:hover {
    background-color: rgba(103, 103, 103, 1);
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const ModalBody = styled.div`
  padding: 2rem;

  h2 {
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }
`;

// const Description = styled.p`
//   color: #fff;
//   font-size: 1.1rem;
//   line-height: 1.6;
//   margin: 0;
//   padding: 0;
// `;

const TechnologiesSection = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  h3 {
    color: #ffffff;
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background-color: #1e93c2ff;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const DeploymentLink = styled.a`
  display: inline-block;
  background-color: #1e93c2ff;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #019874;
  }
`;
