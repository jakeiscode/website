// WhoWeAre.js

import React from 'react';
import { styled } from '@mui/system';
import { Paper, Typography } from '@mui/material';
import values from '../../Component/Assets/values.png';

// Styled components
const WhoWeAreWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  '@media (min-width: 600px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const ContentWrapper = styled('div')({
  flex: '0 0 60%',
  marginBottom: '20px',
  '@media (min-width: 600px)': {
    marginBottom: 0,
  },
});

const ImageWrapper = styled('div')({
  flex: '0 0 40%',
  '@media (min-width: 600px)': {
    flex: '0 0 45%',
  },
});

const SectionTitle = styled('h3')({
  marginBottom: '10px',
});

const Description = styled('p')({
//   fontSize: '1.1rem',
  marginRight: '50px',
  marginBottom: '10px',
});

const Image = styled('img')({
  maxWidth: '100%',
  height: '5',
  borderRadius: '10px',
//   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginRight: '10px',
});

// WhoWeAre component
const WhoWeAre = () => {
  return (
    <WhoWeAreWrapper>
      <ContentWrapper>
        <SectionTitle sx={{ fontWeight: 'bold', fontSize: '40px', fontFamily: 'Tahoma' }}>Welcome to G2EMO Technologies – Empowering Remote Connectivity, Revolutionizing Asset Management!</SectionTitle>
        <Description  sx={{
            fontWeight: 'semi-bold', 
            fontSize: '18px', 
            fontFamily: 'Franklin gothic', 
            color: '#0000000',
            lineHeight: '1.5',
            padding: '10px',
            }}>
            ​At G2EMO, we are dedicated to providing innovative Technology as a Service (TaaS) Solutions that redefine the landscape of remote asset management. With a deep commitment to driving efficiency, connectivity and sustainability. We empower businesses to optimize their operations and maximize the potential of their assets easily from anywhere.
        </Description>
      </ContentWrapper>

      <ImageWrapper>
        <Image src={values} alt="G2EMO" />
      </ImageWrapper>
    </WhoWeAreWrapper>
  );
};

export default WhoWeAre;





// Styled components
// const WhoWeAreWrapper = styled('div')({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '20px',
// });

// const ContentWrapper = styled('div')({
//   flex: '0 0 60%',
// });

// const ImageWrapper = styled('div')({
//   flex: '0 0 40%',
  
// });

// const SectionTitle = styled('h3')({
//   marginBottom: '10px',
// });
