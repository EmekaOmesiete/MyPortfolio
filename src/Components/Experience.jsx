import React from "react";
import styled from "styled-components";

export default function Experience() {
  const exp = [
    {
      role: "Frontend Developer (Intern) — The Curve Africa",
      period: "6 months",
      details:
        "Worked on real-world projects, UI layouts, and responsive components.",
    },
    {
      role: "TraceAid Project",
      period: "Capstone",
      details: "Built dashboards, tracking screens, and collaboration UIs.",
    },
    {
      role: "Weather App",
      period: "two weeks",
      details:
        "Worked on real-time API integration to fetch current weather conditions and forecasts for cities across the world.",
    },
  ];

  return (
    <Section>
      <Title>Experience</Title>
      {exp.map((e, i) => (
        <Card key={i}>
           <Role>{e.role}</Role>
          <Period>{e.period}</Period>
          <Details>{e.details}</Details>
        </Card>
      ))}
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

const Card = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background: #fafafa;
  margin-bottom: 1.5rem;
  transition: 0.3s;

  &:hover {
    background: #f0f0ff;
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

const Role = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.3rem;

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

const Period = styled.small`
  opacity: 0.6;
  display: block;
  margin-bottom: 0.8rem;

   @media (max-width: 480px) {
    margin-bottom: 0.6rem;
  }
`;

const Details = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  @media (max-width: 430px) {
    font-size: 0.85rem;
  }
`;
