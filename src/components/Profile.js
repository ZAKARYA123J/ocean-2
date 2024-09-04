import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './navbar';
import Footer from './footer';
const ProfileSection = styled.section`
  padding: 60px 20px;
  background: #f9fafb;
  min-height: 100vh;
`;

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
`;

const ProfileRole = styled.p`
  color: #777;
`;

const SectionTitle = styled.h2`
  margin-top: 30px;
  font-size: 1.5rem;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 5px;
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillItem = styled.li`
  background: #e0f2fe;
  color: #0284c7;
  padding: 5px 10px;
  border-radius: 5px;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Profile = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    // Fetch member data based on id
    // For demonstration, we'll use hardcoded data
    const fetchedMember = {
      id: 1,
      name: 'John Doe',
      role: 'Frontend Developer',
      image: '/path/to/profile1.jpg',
      skills: ['React', 'JavaScript', 'CSS', 'HTML'],
      projects: [
        { id: 1, title: 'Project One', description: 'Description of project one.' },
        { id: 2, title: 'Project Two', description: 'Description of project two.' },
        // More projects here
      ],
    };
    setMember(fetchedMember);
  }, [id]);

  if (!member) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <ProfileSection>
        <ProfileContainer>
          <ProfileHeader>
            <ProfileImage src={member.image} alt={member.name} />
            <ProfileInfo>
              <ProfileName>{member.name}</ProfileName>
              <ProfileRole>{member.role}</ProfileRole>
            </ProfileInfo>
          </ProfileHeader>
          
          <SectionTitle>Skills</SectionTitle>
          <SkillsList>
            {member.skills.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillsList>

          <SectionTitle>Projects</SectionTitle>
          <ProjectsList>
            {member.projects.map((project) => (
              <ProjectCard key={project.id}>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </ProjectCard>
            ))}
          </ProjectsList>
        </ProfileContainer>
      </ProfileSection>
      <Footer />
    </>
  );
};

export default Profile;
