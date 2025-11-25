import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Section>
      <Title>About Me</Title>
      <Paragraph>
        I am a Frontend Developer passionate about building clean, functional,
        and user-centered digital experiences. I completed a 6-month intensive
        Frontend Development program at The Curve Africa (powered by Kora),
        where I strengthened my skills in React.js, JavaScript, responsive
        design, and modern UI/UX practices.
      </Paragraph>
      <Paragraph>
        I recently built TraceAid, a transparency-driven platform that enhances
        trust between fundraisers and donors through campaign visibility and
        evidence-based progress tracking. I thrive in collaborative, innovative
        environments and I’m open to internships, junior developer roles, remote
        opportunities, and impactful tech collaborations.
      </Paragraph>
    </Section>
  );
}

const Section = styled.section`
  padding: 6rem 2rem;
  max-width: 900px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 4rem 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 3.5rem 1rem;
  }

  @media (max-width: 430px) {
    padding: 3rem 0.8rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 430px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

const Paragraph = styled.p`
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.7;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 430px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;
