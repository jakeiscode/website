import React from 'react';
import { styled } from '@mui/system';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Container, Grid, Paper, TextField, Button } from '@mui/material';


const ContactUsContainer = styled('ContactUsContainer')({
  padding: '40px, 0',
  backgroundColor: '#ffffff',
  textAlign: 'center',
});
  

const ContactSection = styled('ContactSection')({
  padding: '20px',
});

const SectionTitle = styled('h5')({
  // fontSize:'1.5rem',
  // marginBottom: '10px',
  color: '#ffc000',
})
  

const SectionSubtitle = styled('h3')({
  fontSize: '3rem',
  // marginBottom: '20px',
})

const SectionText = styled('h4')({
  color: '#ffc000'
})

const SectionIcon = styled('SectionIcon')({
   color: '#ffc000',
})


const InfoSection = styled(Grid)`
  // margin-top: 20px;
  padding: 30px;
`;

const InfoBox = styled(Grid)`
  text-align: center;
  background-color: #FFFFFF;
  color: #000000;
`;

// const FormSection = styled('FormSection')({
  // padding: '40px, 0',
  // marginTop: '20px',

  // backgroundColor: '#ffffff',
  // width: '100%',
  // textAlign: 'center',
  // padding: '35px',
// });

// const FormRow = styled('Grid')({
//   marginBottom: '20px',
// });
const FormSection = styled('FormSection')({
  // marginTop: '20px',
  textAlign: 'center',
  
  backgroundColor: '#ffffff',
  width: '10%',
  marginLeft: 'auto',
  paddingLeft: '35px',
});

const FormRow = styled(Grid)`
  margin-bottom: 20px;
`;


const TitleContainer = styled('div')({
  textAlign: 'center',
  // marginBottom: '20px',
  backgroundColor: '#000000',
  width: '100%',
});

const AddressParagraph = styled('AddressParagraph')({
  color: '#000000',
  width : '50%',
})


const ContactUs = () => {
  return (
    <ContactUsContainer sx={{ padding: '40px' }}>
      <ContactSection>
        <Grid container spacing={3}>
          <TitleContainer item xs={12}>
            <SectionTitle>GET 24/7 SUPPORT</SectionTitle>
            <SectionSubtitle sx={{ color: '#FFFFFF' }}>Contact us</SectionSubtitle>
          </TitleContainer>
          <InfoSection container spacing={3}>
            <InfoBox item xs={12} md={6}>
              <FaMapMarkerAlt fontSize="large" sx={{ color: '#ffc000' }} />
              <SectionText>Office Address</SectionText>
              <AddressParagraph> <b> Head Office:</b> 180 Woolmead Avenue, London, United Kingdom, NW9 7AZ </AddressParagraph><br />
              <AddressParagraph sx={{ marginLeft: '70px' }}> <b> Branch Office:</b> Regional Office (Africa): 11 Alaba Oniru Street, Victoria Island, Lagos, Nigeria </AddressParagraph>
            </InfoBox>
            <InfoBox item xs={12} md={6}>
              <FaPhone  fontSize="large" />
              <SectionText>Contact</SectionText>
              <p>
                <SectionIcon>
                  <FaPhone  fontSize="large" />
                </SectionIcon>
                <b>Head Office:</b> +44 7436 403361 <br />
                <b>Regional Office (Africa):</b> +234 1 631 1280
              </p>
               
              <p>
                <SectionIcon>
                  <FaEnvelope fontSize="inherit" />
                </SectionIcon>
                contactus@goldeneyeplatform.com
              </p>
            </InfoBox>
          </InfoSection>
          <FormSection sx={{ 
            backgroundColor: '#ffffff',
            width: '70%',
            margin: 'auto',
            paddingLeft: '35px',
            
            }}>
          <SectionSubtitle sx={{ width: '100%', color: '#ffc000', }}>Contact Us</SectionSubtitle>
            <form sx={{ background: 'black', padding: '20px', }}>
              <FormRow container spacing={3} sx={{ padding: '15px', }} >
                <Grid item xs={12} sm={6}  >
                  <TextField label="First Name" fullWidth sx={{ borderRadius: '10px', }}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Last Name" fullWidth sx={{  borderRadius: '10px', }} />
                </Grid>
              </FormRow>
              <FormRow container spacing={3} sx={{ padding: '15px', }} >
                <Grid item xs={12} sm={6} >
                  <TextField label="Phone" fullWidth sx={{borderRadius: '10px', }} />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField label="Email" fullWidth sx={{ borderRadius: '10px', }} />
                </Grid>
              </FormRow>
              <FormRow item xs={12} sm={12} sx={{ padding: '15px', }} >
                {/* <Grid  item xs={12} sm={6}  sx={{ padding: '15px', }}> */}
                  <TextField xs={12} label="Company" fullWidth sx={{  borderRadius: '10px', }} />
                {/* </Grid> */}
              </FormRow>
              <FormRow item xs={12} sm={12} sx={{ padding: '15px', }}>
                {/* <Grid  item xs={12} sm={6}  sx={{ padding: '15px', }}> */}
                  <TextField label="Job Title" fullWidth sx={{ borderRadius: '10px', }} />
                {/* </Grid> */}
              </FormRow>
              <FormRow item xs={12} sm={12} sx={{ padding: '15px', }}>
                {/* <Grid  item xs={12} sm={6}  sx={{ padding: '15px', }}> */}
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ color: 'red', borderRadius: '10px', }}
                  />
                {/* </Grid> */}
              </FormRow>
              <FormRow item xs={12} >
                {/* <Grid  item xs={12} sm={6}  sx={{ padding: '15px', }}> */}
                  <Button xs={12} sm={6} sx={{ borderRadius: '10px', backgroundColor: '#ffc000', color: '#000000', width: '96%', }}>
                    Send
                  </Button>
                {/* </Grid> */}
              </FormRow>
            </form>
          </FormSection>
        </Grid>
      </ContactSection>
    </ContactUsContainer>
  );
};

export default ContactUs;





























// const ContactUsContainer = styled(Container)`
//   padding: 40px 0;
// `;

// const ContactSection = styled(Paper)`
//   padding: 20px;
// `;

// const SectionTitle = styled('h5')`
//   font-size: 1.5rem;
//   margin-bottom: 10px;
// `;

// const SectionSubtitle = styled('h3')`
//   font-size: 2rem;
//   margin-bottom: 20px;
// `;

// const InfoSection = styled(Grid)`
//   margin-top: 20px;
// `;

// const InfoBox = styled(Grid)`
//   text-align: center;
// `;

// const IconWrapper = styled('div')`
//   margin-bottom: 10px;
// `;

// const ContactUs = () => {
//   return (
//     <ContactUsContainer>
//       <ContactSection>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <SectionTitle>GET 24/7 SUPPORT</SectionTitle>
//             <SectionSubtitle>Contact us</SectionSubtitle>
//           </Grid>
//           <InfoSection container spacing={3}>
//             <InfoBox item xs={12} md={6}>
//               <IconWrapper>
//                 <FaPhone fontSize="large" />
//               </IconWrapper>
//               <h4>Office Address</h4>
//               <p>Woolmead Avenue, London, United States</p>
//             </InfoBox>
//             <InfoBox item xs={12} md={6}>
//               <IconWrapper>
//                 <FaPhone fontSize="large" />
//               </IconWrapper>
//               <h4>Contact</h4>
//               <p>
//                 <FaPhone fontSize="inherit" /> +1 (123) 456-7890
//               </p>
//               <p>
//                 <FaEnvelope fontSize="inherit" /> info@example.com
//               </p>
//             </InfoBox>
//           </InfoSection>
//         </Grid>
//       </ContactSection>
//     </ContactUsContainer>
//   );
// };

// export default ContactUs;
