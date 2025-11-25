import React from "react";
import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <Section>
      <Title>Contact Me</Title>
      <Subtitle>
        I’m always happy to connect! Reach out to me via any of the social
        platforms below.
      </Subtitle>

      <Container>
        <SocialLinks>
          <IconLink
            href="https://instagram.com/michaelnmgbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </IconLink>
          <IconLink
            href="https://linkedin.com/in/omesiete-michael-39b3241a3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </IconLink>
          <IconLink
            href="https://github.com/EmekaOmesiete"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </IconLink>
          <IconLink
            href="https://wa.me/+2348161652540"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </IconLink>
          <IconLink href="mailto:omesietemicheal@gmail.com">
            <MdEmail />
          </IconLink>
        </SocialLinks>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: #f9f9ff;

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
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }

  @media (max-width: 430px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }

  @media (max-width: 430px) {
    font-size: 0.9rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }

  @media (max-width: 430px) {
    gap: 1rem;
  }
`;

const IconLink = styled.a`
  font-size: 2.5rem;
  color: #6a5acd;
  transition: 0.3s;

  &:hover {
    color: #836fff;
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 430px) {
    font-size: 1.8rem;
  }
`;
