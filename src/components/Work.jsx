import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import BLSlogo from '../img/BLSlogo.png'; // Import the logo
import ozilogo from '../img/ozilogo.png'; // Import the logo

// Define styled components
const WorkSection = styled('section')({
  padding: '60px 0',
   // Off-white background
  '@media (max-width:600px)': {
    padding: '40px 0',
  },
});

const SectionTitle = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 700,
  color: '#333',
  textAlign: 'center',
  marginBottom: '80px',
  '@media (max-width:600px)': {
    fontSize: '2rem',
  },
});

const TimelineContainer = styled(Box)({
  position: 'relative',
  
  display: 'flex',
  alignItems: 'flex-start', // Align items to the start
  padding: '0 20px',
});

const VerticalLine = styled('div')({
  position: 'absolute',
  left: '30%',
  top: '0',
  bottom: '0',
  width: '8px', // Width of the vertical line
  backgroundColor: '#FDD017', // Yellow line
  zIndex: 0,
});

const LogoContainer = styled(Box)({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '4px solid #FDD017', // Yellow border
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff', // White background for logo container
  position: 'relative',
  zIndex: 1,
  marginBottom: '20px', // Space between logos
});

const WorkDetails = styled(Box)({
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent black background
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  marginLeft: '20px', // Space between the line and the card
  width: '500px', // Fixed width for the card
  transition: 'transform 0.3s ease', // Smooth transition for hover effect
  '&:hover': {
    transform: 'scale(1.05)', // Scale effect on hover
  },
  zIndex: 1,
});

const WorkTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#FDD017', // Yellow text
});

const WorkDescription = styled(Typography)({
  fontSize: '1rem',
  color: '#fff', // White text for description
});

// Sample internship data
const internships = [
  {
    company: 'BLS India-Canada',
    position: 'Web Developer Intern',
    duration: 'Nov 2024 - Present',
    description: 'Redesigned the company website, boosting user engagement by 40% and site traffic by 25% through improved UX & SEO.',
    logo: BLSlogo, // Use the imported logo
  },
  {
    company: 'Ozibook',
    position: 'Web Developer Intern',
    duration: 'July 2024 - Sept 2024',
    description: 'Optimized website functionality, resulting in a 20% faster page load time, improving user experience.',
    logo: ozilogo, // Use the imported logo
  },
  // Add more internships as needed
];

const Work = () => {
  return (
    <WorkSection id="work">
      <SectionTitle>Internship Experience</SectionTitle>
      <TimelineContainer>
        <VerticalLine />
        <Grid container direction="column" >
          {internships.map((internship, index) => (
            <Grid item key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', marginLeft: '27%' }}>
              <LogoContainer>
                <img
                  src={internship.logo}
                  alt={`${internship.company} logo`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Ensures the logo fits well
                />
              </LogoContainer>
              <WorkDetails>
                <WorkTitle>{internship.position}</WorkTitle>
                <Typography variant="subtitle1" color="textSecondary">
                  {internship.company} - {internship.duration}
                </Typography>
                <WorkDescription>{internship.description}</WorkDescription>
              </WorkDetails>
            </Grid>
          ))}
        </Grid>
      </TimelineContainer>
    </WorkSection>
  );
};

export default Work;