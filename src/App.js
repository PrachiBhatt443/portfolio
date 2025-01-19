import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Work from './components/Work';
const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Mobile view breakpoint

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          width: '100%', 
          top: 0, 
          left: 0,
          backgroundColor: '#000', // Black background
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#FFD700' }}>
            My Portfolio
          </Typography>

          {/* Desktop Menu Items */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit">
                <Link to="home" smooth={true} duration={1000} style={{ color: '#FFD700' }}>
                  Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="about" smooth={true} duration={1000} style={{ color: '#FFD700' }}>
                  About
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="skills" smooth={true} duration={1000} style={{ color: '#FFD700' }}>
                  Skills
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="projects" smooth={true} duration={1000} style={{ color: '#FFD700' }}>
                  Projects
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="contact" smooth={true} duration={1000} offset={-80} style={{ color: '#FFD700' }}>
                  Contact
                </Link>
              </Button>
            </Box>
          ) : (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            <ListItem button>
              <ListItemText
                primary={<Link to="home" smooth={true} duration={1000} style={{ color: 'black' }}>Home</Link>}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={<Link to="about" smooth={true} duration={1000} style={{ color: 'black' }}>About</Link>}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={<Link to="skills" smooth={true} duration={1000} style={{ color: 'black' }}>Skills</Link>}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={<Link to="projects" smooth={true} duration={1000} style={{ color: 'black' }}>Projects</Link>}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={<Link to="contact" smooth={true} duration={1000} offset={-80} style={{ color: 'black' }}>Contact</Link>}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Page Components */}
      <Home />
      <About />
      <Skills />
      <Work/>
      <Projects />
      <Contact />
    </>
  );
};

export default App;
