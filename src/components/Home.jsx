import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import myImage from '../hero.png'; // Import your image here

// Define styled components
const HomeSection = styled('section')({
  display: 'flex',
  flexDirection: 'row', // Change to row layout
  alignItems: 'center',
  justifyContent: 'space-between', // Space between the content
  height: '100vh',
  position: 'relative',
  overflow: 'hidden',
  color: '#fff',
  textAlign: 'left', // Align text to the left
  backgroundColor: '#0a0a0a', // Dark background color
  padding: '0 5%',
  '@media (max-width:900px)': {
    flexDirection: 'column', // Stack content vertically on smaller screens
    textAlign: 'center',
    padding: '0 2%',
  },
});

const FloatingText = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 500,
  lineHeight: '1.2',
  marginBottom: '20px',
  animation: 'floating 3s ease-in-out infinite',
  '@keyframes floating': {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0)' },
  },
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
  },
});

const TypingText = styled(Typography)({
  fontSize: '4rem',
  fontWeight: 700,
  lineHeight: '1.2',
  marginBottom: '10px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  borderRight: '.15em solid orange',
  animation: 'typing 3.5s steps(30, end), blink-caret .75s step-end infinite',
  '@keyframes typing': {
    'from': { width: '0%' },
    'to': { width: '100%' },
  },
  '@keyframes blink-caret': {
    'from, to': { borderColor: 'transparent' },
    '50%': { borderColor: 'orange' },
  },
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
});

const HomeSubtitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 400,
  marginBottom: '30px',
  '@media (max-width:600px)': {
    fontSize: '1.2rem',
  },
});

const HeroButton = styled(Button)({
  backgroundColor: '#f39c12',
  color: '#fff',
  padding: '12px 24px',
  borderRadius: '5px',
  textTransform: 'uppercase',
  fontWeight: 600,
  fontSize: '1.2rem',
  '&:hover': {
    backgroundColor: '#e67e22',
  },
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  marginLeft: '0', // Align to the left
  marginRight: 'auto', // Push it to the left side
});

// Background light effect
const BackgroundLight = styled(Box)({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
  animation: 'moveLight 5s linear infinite',
  zIndex: -1, // Ensure it is behind the content
  '@keyframes moveLight': {
    '0%': { backgroundPosition: '0% 50%' },
    '100%': { backgroundPosition: '100% 50%' },
  },
});

const ImageWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // border: '10px solid #f39c12',
  height: '100%', // Ensure the image wrapper takes full height
  '@media (max-width:900px)': {
    display: 'none', // Hide image on smaller screens
  },
});

const Image = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '10px',
  // boxShadow: '0 1px 8px rgba(135, 116, 116, 0.2)',
});

const Home = () => {
  return (
    <HomeSection id="home">
      <BackgroundLight /> {/* Add the background light effect */}
      <Container>
        <FloatingText>
          Welcome to My Creative Space!
        </FloatingText>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <TypingText>
                Hi, I’m Prachi 🌟
              </TypingText>
              <HomeSubtitle>
                A passionate Developer | Innovator | Problem Solver
              </HomeSubtitle>
              <Grid container justifyContent="flex-start">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Link
                    to="contact" // Target section ID
                    smooth={true}
                    duration={500}
                  >
                    <HeroButton variant="contained">
                      Let’s Collaborate
                    </HeroButton>
                  </Link>
                </motion.div>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <FloatingText>
            <ImageWrapper>
              <Image src={myImage} alt="Prachi" />
            </ImageWrapper>
            </FloatingText>
          </Grid>
        </Grid>
      </Container>
    </HomeSection>
  );
};

export default Home;