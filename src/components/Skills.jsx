import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { FaJs, FaReact, FaCss3Alt, FaNodeJs, FaGitAlt, FaDatabase, FaPython, FaJava, FaCuttlefish, FaHtml5, FaMobileAlt } from 'react-icons/fa';
import { SiVisualstudio, SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiPostman, SiGooglecloud, SiCompetitiveprogramming } from 'react-icons/si';

// Define styled components
const SkillsSection = styled('section')({
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden',
  width: '100%', // Ensure full width
  backgroundColor: 'black', // Optional: Add a background color to the section
  '@media (max-width:600px)': {
    padding: '40px 0',
  },
});

const SectionTitle = styled(Typography)({
  fontSize: '5rem',
  fontWeight: 700,
  color: 'white',
  textAlign: 'center',
  marginBottom: '30px',
  '@media (max-width:600px)': {
    fontSize: '2rem',
  },
});

const SkillsContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',  // Center align items horizontally
  width: '100%',  // Ensure full width
  overflow: 'hidden',
  position: 'relative',
  padding: '0 20px', // Add some padding for responsiveness
  '@media (max-width:600px)': {
    padding: '0 10px',  // Reduce padding on small screens
  },
  // Add media queries to ensure responsiveness
  '@media (max-width:768px)': {
    flexDirection: 'column',  // Stack cards vertically on small screens
  },
});

const SkillsWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  animation: 'scroll 20s linear infinite',
  '@media (max-width:600px)': {
    animationDuration: '15s',
  },
  // Stop animation on hover
  '&:hover': {
    animationPlayState: 'paused',
  },
});

const SkillCard = styled('div')(({ iconColor }) => ({
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  padding: '30px',
  margin: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.3s',
  cursor: 'pointer',
  width: '100%', // Ensure full width
  '&:hover': {
    transform: 'scale(1.2)',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.3)',
    backgroundColor: '#f0f0f0',
  },
  '&:hover .skill-icon': {
    color: iconColor || '#c0c0c0', // Change icon color to the original color on hover
    filter: 'none', // Remove grayscale on hover
  },
  '&:hover .skill-title': {
    color: '#1abc9c', // Change the title color on hover
  },
  '&:hover .skill-description': {
    color: '#333', // Change the description color on hover
  },
}));

const SkillIcon = styled('div')({
  fontSize: '100px',
  color: '#000', // Default color for the icon
  marginBottom: '10px',
  transition: 'color 0.3s, filter 0.3s',
  filter: 'grayscale(0%)', // No grayscale by default
});

const SkillTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#333',
  marginBottom: '10px',
  transition: 'color 0.3s',
});

const SkillDescription = styled(Typography)({
  fontSize: '1rem',
  color: '#666',
  transition: 'color 0.3s',
});

const skillsData = [
  { title: 'JavaScript', description: 'Experienced in modern JavaScript including ES6+', icon: FaJs, iconColor: '#f0db4f' },
  { title: 'React', description: 'Developed dynamic user interfaces with React', icon: FaReact, iconColor: '#61DAFB' },
  { title: 'CSS', description: 'Styled responsive websites with CSS and preprocessors', icon: FaCss3Alt, iconColor: '#1572B6' },
  { title: 'Node.js', description: 'Built server-side applications with Node.js', icon: FaNodeJs, iconColor: '#68A063' },
  { title: 'Git', description: 'Version control with Git and GitHub', icon: FaGitAlt, iconColor: '#F05032' },
  { title: 'MySQL', description: 'Database design and management with MySQL', icon: FaDatabase, iconColor: '#00758F' },
  { title: 'Visual Studio Code', description: 'Integrated development environment for coding', icon: SiVisualstudio, iconColor: '#007ACC' },
  { title: 'Python', description: 'Programming in Python for various applications', icon: FaPython, iconColor: '#306998' },
  { title: 'Java', description: 'Java programming for building robust applications', icon: FaJava, iconColor: '#007396' },
  { title: 'C/C++', description: 'Programming in C/C++ for system-level applications', icon: FaCuttlefish, iconColor: '#00599C' },
  { title: 'HTML', description: 'Building web pages and applications with HTML', icon: FaHtml5, iconColor: '#E34F26' },
  { title: 'Tailwind CSS', description: 'Utility-first CSS framework for modern designs', icon: SiTailwindcss, iconColor: '#38B2AC' },
  { title: 'Express.js', description: 'Backend framework for building web applications with Node.js', icon: SiExpress, iconColor: '#000000' },
  { title: 'MongoDB', description: 'NoSQL database for handling large volumes of data', icon: SiMongodb, iconColor: '#47A248' },
  { title: 'Mongoose', description: 'ODM for MongoDB to manage data relationships', icon: SiMongoose, iconColor: '#880000' },
  { title: 'Postman', description: 'API development and testing tool', icon: SiPostman, iconColor: '#EF5B25' },
  { title: 'React Native', description: 'Building mobile applications with React Native', icon: FaMobileAlt, iconColor: '#61DAFB' },
  { title: 'Google Cloud', description: 'Cloud computing services and solutions', icon: SiGooglecloud, iconColor: '#4285F4' },
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <SkillsContainer>
        <SkillsWrapper className="skills-wrapper">
          {skillsData.concat(skillsData).map((skill, index) => (
            <SkillCard key={index} iconColor={skill.iconColor}>
              <SkillIcon 
                className="skill-icon" 
                as={skill.icon} 
              />
              <SkillTitle className="skill-title">{skill.title}</SkillTitle>
              <SkillDescription className="skill-description">{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsWrapper>
      </SkillsContainer>
      {/* Keyframes for scrolling effect */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .skills-wrapper {
          animation: scroll 20s linear infinite;
        }

        .skills-wrapper:hover {
          animation-play-state: paused; // Stop animation on hover
        }
      `}</style>
    </SkillsSection>
  );
};

export default Skills;
