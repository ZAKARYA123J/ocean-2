import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './navbar';
import Footer from './footer';

const TeamSection = styled.section`
  background: url('/path/to/your/background-image.jpg') center/cover no-repeat;
  padding: 60px 0;
  position: relative;
  color: #fff;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HeaderContent = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
  padding: 0 20px;
`;

const TeamCard = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin: 10px 0;
  color: #333;
`;

const CardRole = styled.p`
  color: #777;
  margin-bottom: 15px;
`;

const ViewProfileButton = styled(Link)`
  padding: 10px 15px;
  background: #3a86ff;
  color: #fff;
  border-radius: 20px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #1d4ed8;
  }
`;

const Team = () => {
  // Sample data - Replace with real data or fetch from an API
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Frontend Developer', image: '/path/to/profile1.jpg' },
    { id: 2, name: 'Jane Smith', role: 'Backend Developer', image: '/path/to/profile2.jpg' },
    // Add more team members here
  ];

  return (
    <>
      <Navbar />
      <TeamSection>
        <Overlay />
        <HeaderContent>
          <h1>Meet Our Team</h1>
          <p>Get to know the talented individuals behind our success.</p>
        </HeaderContent>
      </TeamSection>
      <div className="container mx-auto">
        <TeamGrid>
          {teamMembers.map(member => (
            <TeamCard key={member.id}>
              <CardImage src={member.image} alt={member.name} />
              <CardContent>
                <CardTitle>{member.name}</CardTitle>
                <CardRole>{member.role}</CardRole>
                <ViewProfileButton to={`/team/${member.id}`}>View Profile</ViewProfileButton>
              </CardContent>
            </TeamCard>
          ))}
        </TeamGrid>
      </div>
      <Footer />
    </>
  );
};

export default Team;
