import React, { useState } from 'react';
import { Button, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img1 from '../img/learn1.png';
import img2 from '../img/accredian.png';
import img3 from '../img/brews.png';
import img4 from '../img/food1.png';

// Project data
const projects = [
  {
    title: 'Learnease',
    description: `A platform for students to access study material, practice coding problems, and prepare for competitive exams with features like a coding environment and practice tests.`,
    techStack: 'React, Vite, Material-UI',
    liveLink: 'https://learn-ease-delta.vercel.app/',
    githubLink: 'https://github.com/PrachiBhatt443/LearnEase',
    image: img1,  
  },
  {
    title: 'Accredian',
    description: `A referral program platform that allows users to refer friends, earn rewards, and track referral success.`,
    techStack: `React, Material-UI, Google Cloud MySQL, Tailwind CSS`,
    liveLink: 'https://accredian-frontend-task-chi.vercel.app/',
    githubLink: 'https://github.com/PrachiBhatt443/Accredian-frontend-task',
    image: img2,  
  },
  {
    title: 'Brews Bay',
    description: `A coffee shop website offering a range of coffee products with a focus on modern, user-friendly design and seamless e-commerce experience.`,
    techStack: 'React, Tailwind CSS',
    liveLink: 'https://brews-bay.vercel.app/',
    githubLink: 'https://github.com/PrachiBhatt443/Brews',
    image: img3,  
  },
  {
    title: 'Flavourful Bites of India',
    description: `A food delivery website offering a range of dishes with features like menu browsing, order placing, and delivery tracking.`,
    techStack: 'React, Tailwind CSS',
    liveLink: 'https://flavorful-bites-india.vercel.app/',
    githubLink: 'https://github.com/PrachiBhatt443/Flavorful_Bites_India',
    image: img4,  
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePreviousProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const { title, description, techStack, liveLink, githubLink, image } = projects[currentIndex];

  return (
    <>
      <Typography 
        variant="h3" 
        id="projects" 
        align="center" 
        gutterBottom 
        sx={{ 
          paddingTop: '50px', 
          color: 'black',
          paddingBottom: '40px',
          fontSize: '3rem',
          fontWeight: 800
        }}
      >
        My Projects
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          backgroundColor: 'black',  
          padding: '20px', // Reduced padding to fit within screen height
          borderRadius: '10px',
          border: '1px solid #ddd',  
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  
          flexDirection: { xs: 'column', md: 'row' },
          maxHeight: 'calc(100vh - 90px)', // Increased max height to fit the image and content
          overflow: 'hidden', // Ensure content doesn’t overflow
        }}
      >
        {/* Previous Project Button for Desktop View */}
        <IconButton
          sx={{
            display: { xs: 'none', md: 'block' },
            backgroundColor: '#ff4081', 
            color: '#fff',
            '&:hover': { backgroundColor: '#1976d2' },
          }}
          onClick={handlePreviousProject}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1000px',
            backgroundColor: '#f5f5f5',  
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',  
            overflow: 'hidden',
            padding: '20px',
            color: '#333',  
            height: '100%',
            maxHeight: 'calc(100vh - 90px)', // Increased max height to fit the image and content
          }}
        >
          <Box
            sx={{
              flex: 2,  // Increased width for image
              maxHeight: '560px', // Increased height for image
              overflow: 'hidden',
            }}
          >
            <img
              src={image}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,  // Decreased width for text container
              padding: '20px',
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: '#ff4081' }}>
              {title}
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: 'left' }}>
              {description}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'left' }}>
              <strong>Tech Stack:</strong> {techStack}
            </Typography>
            <Box
              sx={{
                marginTop: '10px',
                display: 'flex',
                gap: '10px',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: '#ff4081',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#1976d2' },
                }}
              >
                Live
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#ff4081',
                  borderColor: '#ff4081',
                  '&:hover': {
                    borderColor: '#1976d2',
                    color: '#1976d2',
                  },
                }}
              >
                GitHub
              </Button>
            </Box>
          </Box>
        </Box>
        
        {/* Next Project Button for Desktop View */}
        <IconButton
          sx={{
            display: { xs: 'none', md: 'block' },
            backgroundColor: '#ff4081',  
            color: '#fff',
            '&:hover': { backgroundColor: '#1976d2' },
          }}
          onClick={handleNextProject}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Next Project Button for Mobile View */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          marginTop: '30px',
          display: { xs: 'block', md: 'none' }, // Show on phone screens only
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handleNextProject}
          sx={{
            backgroundColor: '#ff4081',
            color: '#fff',
            '&:hover': { backgroundColor: '#f50057' },
          }}
        >
          Next Project
        </Button>
      </Box>
    </>
  );
};

export default Projects;
