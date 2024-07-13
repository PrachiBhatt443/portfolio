import React from 'react';
import { TextField, Button, IconButton, Typography, Container, Box } from '@mui/material';
import { Instagram, LinkedIn, GitHub, LocationOn, Email, Phone } from '@mui/icons-material';
import { styled } from '@mui/system';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the toast CSS

// Define styled components
const BackgroundCircle = styled('div')({
  position: 'absolute',
  width: '450px',
  height: '450px',
  borderRadius: '50%',
  background: '#FFD700', // Yellow color for the background circle
  top: '-10%',
  right: '-10%',
  zIndex: 0,
  transform: 'translate(-50%, -50%)',
  '@media (max-width:600px)': {
    width: '300px',
    height: '300px',
    top: '10%',
    right: '10%',
  },
});

const FormContainer = styled(Container)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '40px',
  backgroundColor: '#000', // Black background for the form container
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden',
  zIndex: 1,
  '@media (max-width:600px)': {
    flexDirection: 'column',
    padding: '20px',
  },
});

const ContactLeft = styled(Box)({
  flex: 1,
  paddingRight: '20px',
  color: '#FFD700', // Yellow color for text in the left section
  '@media (max-width:600px)': {
    display: 'none', // Hide the left section on small screens
  },
});

const ContactRight = styled(Box)({
  flex: 1,
  paddingLeft: '20px',
  '@media (max-width:600px)': {
    paddingLeft: '0',
    marginTop: '20px',
  },
});

const ContactTitle = styled(Typography)({
  color: '#FFD700',
  fontSize: '4rem',
  fontWeight: 'bold',
  textAlign: 'center',
});

const ContactText = styled(Typography)({
  color: '#FFD700',
  fontSize: '1rem',
  textAlign: 'left',
  marginBottom: '20px',
});

const ContactForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    color: '#fff', // White text color for inputs
  },
  '& .MuiFormLabel-root': {
    color: '#FFD700', // Yellow color for form labels
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FFD700', // Yellow border color for text fields
    },
    '&:hover fieldset': {
      borderColor: '#FFC107', // Slightly darker yellow border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFC107', // Yellow border color on focus
    },
  },
});

const SubmitButton = styled(Button)({
  backgroundColor: '#FFD700', // Yellow color for the button background
  color: '#000', // Black text color for the button
  fontSize: '1rem',
  padding: '12px 0',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#FFC107', // Darker yellow shade for button on hover
  },
});

const InfoSection = styled(Box)({
  marginTop: '20px',
  textAlign: 'left',
});

const InfoTitle = styled(Typography)({
  color: '#FFD700', // Yellow color for the info title
  marginBottom: '10px',
  fontWeight: 'bold',
});

const InfoText = styled(Typography)({
  color: '#FFD700', // Yellow color for info text
  marginBottom: '10px',
});

const SocialIcons = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '10px',
});

const SocialIcon = styled(IconButton)({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: '#FFD700', // Yellow color for social icons
  color: '#000', // Black color for social icons
  transition: '0.3s',
  '&:hover': {
    background: '#FFC107', // Darker yellow shade for social icons on hover
    transform: 'scale(1.2)', // Slightly larger on hover
  },
});

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send form method
    emailjs.sendForm('prachigmail', 'template_8tsv7p5', e.target, 'YOUR_USER_ID')
      .then((result) => {
        toast.success('Thanks for messaging. I\'ll reply soon!');
        e.target.reset(); // Reset form fields after successful submission
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <Container
      id="contact"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: 2,
        marginTop: 20,
        backgroundColor: '#000', // Black background for the entire container
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BackgroundCircle />
      <FormContainer>
        <ContactLeft>
          <ContactTitle>Let's Connect!</ContactTitle>
          <ContactText>
            Got a project in mind or just want to geek out about coding? I'm all ears! Shoot me a message.
            Let's create something awesome together.
          </ContactText>
          <InfoSection>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoText>
              <LocationOn sx={{ color: '#FFD700', verticalAlign: 'middle' }} /> Delhi Cantt, Delhi 110010
            </InfoText>
            <InfoText>
              <Email sx={{ color: '#FFD700', verticalAlign: 'middle' }} /> bprachi443@gmail.com
            </InfoText>
            <InfoText>
              <Phone sx={{ color: '#FFD700', verticalAlign: 'middle' }} /> 9350348377
            </InfoText>
            <SocialIcons>
              <SocialIcon href="https://www.linkedin.com/in/prachi-bhatt-ba351324b" target="_blank" aria-label="LinkedIn">
                <LinkedIn />
              </SocialIcon>
              <SocialIcon href="https://github.com/PrachiBhatt443" target="_blank" aria-label="GitHub">
                <GitHub />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/ihcarp443/?utm_source=qr" target="_blank" aria-label="Instagram">
                <Instagram />
              </SocialIcon>
            </SocialIcons>
          </InfoSection>
        </ContactLeft>
        <ContactRight>
          <ContactForm onSubmit={handleSubmit}>
            <StyledTextField name="name" label="Name" variant="outlined" required />
            <StyledTextField name="email" type="email" label="Email" variant="outlined" required />
            <StyledTextField name="message" label="Message" variant="outlined" multiline rows={4} required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </ContactRight>
      </FormContainer>
      <ToastContainer />
    </Container>
  );
};

export default Contact;
