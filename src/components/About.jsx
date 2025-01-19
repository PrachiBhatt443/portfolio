import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const AboutUs = () => (
  <Container
    id="about"
    sx={{
      padding: { xs: '50px 20px', md: '100px 0' },
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}
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
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.div
      style={{ display: 'inline-block', cursor: 'pointer' }}
      animate={{ rotate: [0, 10, -10, 0] }} // Waving effect
      transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.2, rotate: 15 }} // Scale and rotate on hover
      // transition={{ type: 'spring', stiffness: 300 }} // Spring effect for hover
    >
      <span role="img" aria-label="hand wave" style={{ fontSize: '3rem' }}>
        👋
      </span>
    </motion.div> Hello, I'm Prachi Bhatt!
    </Typography>
    
    <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h6"
          sx={{ marginBottom: 2 }}
        >
          I'm a passionate <strong>MERN Stack Developer</strong> with a knack for creating dynamic and user-friendly web applications.
        </Typography>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Typography
          variant="body1"
          sx={{ marginBottom: 2 }}
        >
          I have hands-on experience with <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>Express</strong>, and I've completed internships that have sharpened my skills in web development.
        </Typography>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Typography
          variant="body1"
          sx={{ marginBottom: 2 }}
        >
          I thrive on challenges, having participated in hackathons where I’ve integrated hardware projects using <strong>Arduino</strong> and machine learning algorithms.
        </Typography>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Typography
          variant="body1"
          sx={{ marginBottom: 4 }}
        >
          Currently, I'm diving into <strong>React Native</strong> for mobile app development and am committed to continuous learning in the tech space.
        </Typography>
      </motion.div>
    </Box>

    <Typography
      variant="h5"
      align="center"
      sx={{ marginBottom: 2, color: "orange" }}
    >
      Here are a few highlights of my journey so far:
    </Typography>
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 4,
      }}
    >
      {/* Achievement Cards */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <AchievementCard title="🏆 Hackathon Runner-Up" description="Runner-up in a 72-hour hackathon for 'Eklavya: The Laser Turret'." />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <AchievementCard title="🥉 3 rd Runner Up" description="Won prize money of INR 50000 at GFG Vultr Hackathon." />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <AchievementCard title="🌟 Top 10 in UPES Hardwar 3.0" description="Achieved top 10 position at an international level hackathon." />
      </motion.div>
    </Box>

    <Box sx={{ textAlign: 'center' }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <Button
          variant="contained"
          color="primary"
          href="https://drive.google.com/uc?export=download&id=15YGCcHfgyTpm17GGMNjMx6EWqiNLd0il"
          sx={{
            backgroundColor: '#ffeb3b',
            color: '#000',
            marginTop: 2,
            '&:hover': {
              backgroundColor: '#fbc02d',
            },
          }}
        >
          📄 Download My Resume
        </Button>
      </motion.div>
    </Box>
  </Container>
);

const AchievementCard = ({ title, description }) => (
  <Box
    sx={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      maxWidth: '300px',
      width: '100%',
      textAlign: 'left',
      '&:hover': {
        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
        transform: 'translateY(-5px)',
      },
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}
  >
    <Typography variant="h6" sx={{ color: '#ff5722', marginBottom: 1 }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: '#555', marginBottom: 1 }}>
      {description}
    </Typography>
  </Box>
);

export default AboutUs;