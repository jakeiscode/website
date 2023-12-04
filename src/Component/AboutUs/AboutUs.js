// AboutUs.js

import React from 'react';
import { styled } from '@mui/system';
import { Paper, Typography } from '@mui/material';
import mission from '../../Component/Assets/mission.png';
import vision from '../../Component/Assets/vision.png';
import values from '../../Component/Assets/values.png';

// Styled components
const AboutUsWrapper = styled('div')({
  padding: '20px',
  marginBottom: '40px',
});

const SectionTitle = styled('h3')({
  fontWeight: 'bold',
  fontSize: '24px',
  fontFamily: 'Tahoma',
  marginBottom: '10px',
});

const ContentWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
});

const ContentItem = styled('div')({
  flex: '0 0 30%',
  textAlign: 'center',
  padding: '15px',
});

const Image = styled('img')({
  // verticalAlign: 'middle',
  width: '140px',
  height: '140px',
  borderRadius: '50%',
  paddingBottom: '10px',
});

// AboutUs component
const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <SectionTitle sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '40px', fontFamily: 'Franklin gothic' }}>VISION, MISSION, AND VALUES</SectionTitle>
      <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'semi-bold', fontSize: '18px', fontFamily: 'Franklin gothic', color: '#ffc000' }}>We have a clear vision, mission, and deep-rooted principles.</Typography>

      <ContentWrapper>
        <ContentItem>
          <Image src={vision} alt="Vision" />
          <Typography variant="h6" sx={{fontWeight: 'bold', fontSize:  '20px', fontFamily: 'Tahoma' }}>Vision</Typography>
          <Typography sx={{ textAlign: 'center', fontWeight: '300', fontSize: '18px', fontFamily: 'Franklin gothic' }}>
            To create a connected future for our users through technology.
          </Typography>
        </ContentItem>

        <ContentItem>
          <Image src={mission} alt="Mission" />
          <Typography variant="h6" sx={{fontWeight: 'bold', fontSize:  '20px', fontFamily: 'Tahoma' }}>Mission</Typography>
          <Typography sx={{ textAlign: 'center', fontWeight: '300', fontSize: '18px', fontFamily: 'Franklin gothic' }}>
            To realize our vision by creating cutting-edge technology that ensures the comfort, effectiveness, and efficiency of our users' activities
          </Typography>
        </ContentItem>

        <ContentItem>
          <Image src={values} alt="Values" />
          <Typography variant="h6" sx={{fontWeight: 'bold', fontSize: '20px', fontFamily: 'Tahoma' }}>Values</Typography>
          <Typography sx={{ textAlign: 'center', fontWeight: '300', fontSize: '18px', fontFamily: 'Franklin gothic' }}>
          Teamwork, Innovation, Ease <b>(T.I.E).</b>
          </Typography>
        </ContentItem>
      </ContentWrapper>
    </AboutUsWrapper>
  );
};

export default AboutUs;
