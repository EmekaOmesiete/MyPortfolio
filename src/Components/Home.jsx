import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Section>
      <Title>
        Hi, I'm <Highlight>Emeka Michael Omesiete</Highlight>
      </Title>
      <SubTitle>
        Frontend Developer | React.js | HTML • CSS | Vite | Javascript | APIs /
        Axios | Styled-Components | Git & GitHub
      </SubTitle>
      <Button to="/projects">View Projects</Button>
    </Section>
  );
}

const Section = styled.section`
  padding: 8rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #6a5acd 0%, #836fff 100%);
  color: white;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 5rem 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 430px) {
    padding: 3.5rem 0.8rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }

  @media (max-width: 600px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2.1rem;
  }

  @media (max-width: 430px) {
    font-size: 1.9rem;
  }
`;

const Highlight = styled.span`
  color: #ffdd59;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }

  @media (max-width: 430px) {
    font-size: 1rem;
  }
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  background: white;
  color: #6a5acd;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #e0e0ff;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
  }

  @media (max-width: 600px) {
    padding: 0.8rem 1.6rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.4rem;
    font-size: 0.95rem;
  }

  @media (max-width: 430px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;
