import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { FaJs, FaReact, FaCss3Alt, FaNodeJs, FaGitAlt, FaDatabase, FaPython, FaJava, FaCuttlefish, FaHtml5, FaMobileAlt, FaCode } from 'react-icons/fa';
import { SiVisualstudio, SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiPostman, SiGooglecloud } from 'react-icons/si';

// Define styled components
const SkillsSection = styled('section')({
  padding: '60px 0',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  backgroundColor: 'black',
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
  justifyContent: 'center',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  padding: '20px 30px',
  '@media (max-width:600px)': {
    padding: '10px 15px',
  },
  '@media (max-width:768px)': {
    flexDirection: 'column',
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
  '&:hover': {
    animationPlayState: 'paused',
  },
});

const SkillCard = styled('div')(({ iconColor }) => ({
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  padding: '30px',
  margin: '0 10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.3s',
  cursor: 'pointer',
  width: '150px', // Fixed width for uniformity
  height: '150px', // Fixed height for uniformity
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.3)',
    backgroundColor: '#f0f0f0',
    // Change icon color on card hover
    '& .skill-icon': {
      color: iconColor || '#c0c0c0', // Change icon color to the original color on hover
      transform: 'scale(1.2)', // Increase icon size on hover
    },
  },
}));

const SkillIcon = styled('div')({
  fontSize: '90px', // Default size for the icon
  color: '#000', // Default color for the icon
  marginBottom: '10px',
  transition: 'color 0.3s, filter 0.3s, transform 0.3s', // Added transform transition
  filter: 'grayscale(0%)', // No grayscale by default
});

const SkillTitle = styled(Typography)({
  fontSize: '1.2rem', // Reduced size for better fit
  fontWeight: 600,
  color: '#333',
  marginBottom: '10px',
  transition: 'color 0.3s, font-size 0.3s', // Added font-size transition
});

// Skills data
const skillsData = [
  { title: 'JavaScript', icon: FaJs, iconColor: '#f0db4f' },
  { title: 'React', icon: FaReact, iconColor: '#61DAFB' },
  { title: 'CSS', icon: FaCss3Alt, iconColor: '#1572B6' },
  { title: ' Node.js', icon: FaNodeJs, iconColor: '#68A063' },
  { title: 'Git', icon: FaGitAlt, iconColor: '#F05032' },
  { title: 'MySQL', icon: FaDatabase, iconColor: '#00758F' },
  { title: 'Visual Studio Code', icon: SiVisualstudio, iconColor: '#007ACC' },
  { title: 'Python', icon: FaPython, iconColor: '#306998' },
  { title: 'Java', icon: FaJava, iconColor: '#007396' },
  { title: 'C/C++', icon: FaCuttlefish, iconColor: '#00599C' },
  { title: 'HTML', icon: FaHtml5, iconColor: '#E34F26' },
  { title: 'Tailwind CSS', icon: SiTailwindcss, iconColor: '#38B2AC' },
  { title: 'Express.js', icon: SiExpress, iconColor: '#000000' },
  { title: 'MongoDB', icon: SiMongodb, iconColor: '#47A248' },
  { title: 'Mongoose', icon: SiMongoose, iconColor: '#880000' },
  { title: 'Postman', icon: SiPostman, iconColor: '#EF5B25' },
  { title: 'React Native', icon: FaMobileAlt, iconColor: '#61DAFB' },
  { title: 'Google Cloud', icon: SiGooglecloud, iconColor: '#4285F4' },
  { title: 'Wix', icon: FaHtml5, iconColor: '#E34F26' }, // New skill
  { title: 'Competitive Programming', icon: FaCode, iconColor: '#FFD700' }, // Using FaCode for competitive programming
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <SkillsContainer>
        <SkillsWrapper className="skills-wrapper">
          {/* Duplicate the skills data for seamless scrolling */}
          {[...skillsData, ...skillsData].map((skill, index) => (
            <SkillCard key={index} iconColor={skill.iconColor}>
              <SkillIcon 
                className="skill-icon" 
                as={skill.icon} 
              />
              <SkillTitle className="skill-title">{skill.title}</SkillTitle>
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
            transform: translateX(-50%); // Adjusted for smoother circular motion
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