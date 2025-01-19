import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import BLSlogo from '../img/BLSlogo.png'; // Import the logo
import ozilogo from '../img/ozilogo.png'; // Import the logo

// Define styled components
const WorkSection = styled('section')({
  padding: '60px 0',
//   backgroundColor: '#f9f9f9', // Off-white background
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
  padding: '0 20px',
});

const HorizontalLine = styled('div')({
  position: 'absolute',
//   top: '50%',
  left: '0',
  right: '0',
  height: '10px', // Increased height for a broader line
  backgroundColor: '#FDD017', // #FDD017 line
  zIndex: 0,
});

const TimelineItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  marginBottom: '40px',
  zIndex: 1,
});

const LogoContainer = styled(Box)({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '8px solid #FDD017', // #FDD017 border
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff', // White background for logo container
  position: 'absolute',
//   top: '50%',
  transform: 'translateY(-50%)', // Center the logo vertically on the line
  zIndex: 1,
});

const WorkDetails = styled(Box)({
  backgroundColor: '#fff', // White background for details
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  marginTop: '60px', // Space below the logo
  zIndex: 1,
  width:'60%',
});

const WorkTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#1abc9c', // #FDD017 text
});

const WorkDescription = styled(Typography)({
  fontSize: '1rem',
  color: '#666',
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
        <HorizontalLine />
        <Grid container justifyContent="center">
          {internships.map((internship, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
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