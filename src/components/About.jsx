import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => (
  <Container
    id="about"
    sx={{ padding: '100px 0', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
    component={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Typography
      variant="h3"
      align="center"
      sx={{ color: 'black', marginBottom: 4, fontWeight: 'bolder' }}
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}  // Start from above and transparent
      animate={{ opacity: 1, y: 0 }}    // Fade in and move to original position
      transition={{ duration: 1, ease: 'easeOut' }}  // Duration and easing function
    >
      Who Am I?
    </Typography>
    <Box sx={{ padding: '0 20px', textAlign: 'center' }}>
      <Typography
        variant="h6"
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{ marginBottom: 2 }}
      >
        Hi, I'm <strong>Prachi Bhatt</strong>, a passionate frontend React developer currently pursuing my <strong>Bachelor of Technology in Computer Science and Engineering</strong> at <strong>Govind Ballabh Pant Institute of Engineering and Technology</strong>, Uttarakhand, India.
      </Typography>
      <Typography
        variant="body1"
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        sx={{ marginBottom: 2 }}
      >
        I create <strong>interactive</strong> and <strong>user-friendly</strong> applications with a focus on <strong>MERN stack</strong>.
      </Typography>
      <Typography
        variant="body1"
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        sx={{ marginBottom: 2 }}
      >
        I enjoy participating in <strong>hackathons</strong> and <strong>coding challenges</strong> to hone my <strong>skills</strong> and <strong>knowledge</strong> 📚.
      </Typography>
      <Typography
        variant="body1"
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        sx={{ marginBottom: 4 }}
      >
        Here are a few highlights of my journey so far:
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {/* Achievement Cards */}
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            maxWidth: '300px',
            width: '100%',
            textAlign: 'left',  // Align text to the left
            '&:hover': {
              boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
              transform: 'translateY(-5px)',
            },
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <Typography variant="h6" sx={{ color: '#ff5722', marginBottom: 1 }}>
            🏆 Hackathon Runner-Up
          </Typography>
          <Typography variant="body2" sx={{ color: '#555', marginBottom: 1 }}>
            Runner-up in a 72-hour hackathon for "<strong>Eklavya: The Laser Turret</strong>".
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            maxWidth: '300px',
            width: '100%',
            textAlign: 'left',  // Align text to the left
            '&:hover': {
              boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
              transform: 'translateY(-5px)',
            },
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <Typography variant="h6" sx={{ color: '#3f51b5', marginBottom: 1 }}>
            🛠️ Full-Stack Experience
          </Typography>
          <Typography variant="body2" sx={{ color: '#555', marginBottom: 1 }}>
            Experienced in building <strong>full-stack</strong> apps with React and backend technologies.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            maxWidth: '300px',
            width: '100%',
            textAlign: 'left',  // Align text to the left
            '&:hover': {
              boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
              transform: 'translateY(-5px)',
            },
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <Typography variant="h6" sx={{ color: '#4caf50', marginBottom: 1 }}>
            🎯 Coding Enthusiast
          </Typography>
          <Typography variant="body2" sx={{ color: '#555', marginBottom: 1 }}>
            Passionate about <strong>coding</strong> and solving <strong>problems</strong> through technology.
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        color="primary"
        href="https://drive.google.com/uc?export=download&id=15YGCcHfgyTpm17GGMNjMx6EWqiNLd0il"  // Direct link to the PDF
        endIcon={<ArrowForwardIos />}
        sx={{
          backgroundColor: '#ffeb3b',
          color: '#000',
          marginTop:10,
          '&:hover': {
            backgroundColor: '#fbc02d',
          },
        }}
      >
        Download Resume
      </Button>
    </Box>
  </Container>
);

export default About;
