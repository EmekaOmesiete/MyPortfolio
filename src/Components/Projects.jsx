import React from "react";
import styled from "styled-components";

export default function Projects() {
  const projects = [
    {
      title: "DawnEats (Ongoing)",
      desc: "DawnEats is an ongoing breakfast food ordering and delivery platform focused on providing fast, reliable, and user-friendly digital ordering",
      link: "https://dawn-eats-break-fast-website.vercel.app/",
    },
    {
      title: "TraceAid Project",
      desc: "TraceAid is a transparency-driven fundraising platform designed to eliminate the trust gap between donors and fundraisers.It ensures accountability, authenticity, and verifiable impact by requiring fundraisers to upload valid evidence, documents, and supporting information before a campaign can go live. Through real-time updates, milestone evidence, verified identities, and secure donation flow, TraceAid empowers donors to give with confidence — knowing every campaign is genuine, trackable, and accountable.",
      link: "https://trace-aid.vercel.app/",
    },
    {
      title: "Weather App",
      desc: "Weather App is a system that allows users to get the latest weather forecasts and conditions for cities across the world.",
      link: "https://weatherapp-ruddy-xi.vercel.app/",
    },
    {
      title: "Quiz Master",
      desc: "Quiz Master is a simple, interactive web-based quiz application built with HTML, CSS, and JavaScript. It allows users to test their knowledge on tech basics through a clean interface, starting from a welcoming homepage and proceeding to the quiz section with a single click.",
      link: "https://quiz-app-self-nu-30.vercel.app/",
    },
    {
      title: "Quechilly Essentials",
      desc: "your one-stop destination for radiant, nourished lips. Our Lip Care Kit is thoughtfully crafted to bring out your natural beauty while keeping your lips soft, hydrated, and irresistibly smooth.",
      link: "https://quechilly-essentials.vercel.app/",
    }
  ];

  return (
    <Section>
      <Title>Projects</Title>
      <Cards>
        {projects.map((p, i) => (
          <Card key={i}>
            <ProjectTitle>{p.title}</ProjectTitle>
            <ProjectDesc>{p.desc}</ProjectDesc>
            <ViewLink href={p.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ViewLink>
          </Card>
        ))}
      </Cards>
    </Section>
  );
}

const Section = styled.section`
  padding: 6rem 2rem;
  max-width: 1000px;
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
  margin-bottom: 3rem;

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

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }

  @media (max-width: 430px) {
    gap: 1rem;
  }
`;

const Card = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  background: #fafafa;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.3rem;
  }

  @media (max-width: 600px) {
    padding: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  @media (max-width: 430px) {
    padding: 0.9rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 430px) {
    font-size: 0.95rem;
  }
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }

  @media (max-width: 430px) {
    font-size: 0.8rem;
  }
`;

const ViewLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 6px 12px;
  background-color: #0070f3;
  color: white;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #005bb5;
  }

  @media (max-width: 480px) { font-size: 0.8rem; }
  @media (max-width: 430px) { font-size: 0.75rem; }
`;
