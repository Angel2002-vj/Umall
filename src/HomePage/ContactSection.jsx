import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
const ContactSection = () => {
    const ColorButton = styled(Button)(({ theme }) => ({
      
        backgroundColor: '#3E56A2',
        '&:hover': {
          backgroundColor: '#3E56A2',
        },
      }));
  return (
    <div className="contact-form-section">
    <div className="contact-information-section">
        <div className="contact-information-section-info">
            <div className="contact-information-head">Contact Information</div>
            <div className="contact-information-description">Say something to start a live chat!</div>
            <div className="contact-information"><div className="contact-icon"><i class="ri-phone-fill"></i></div><div className="contact-data">+1012 3456 789</div></div>
            <div className="contact-information"><div className="contact-icon"><i class="ri-mail-fill"></i></div><div className="contact-data">demo@gmail.com</div></div>
            <div className="contact-information"><div className="contact-icon"><i class="ri-map-pin-2-fill"></i></div><div className="contact-data">132 Dartmouth Street Boston, Massachusetts 02156 United States</div></div>
            <div className='social-media--links'>
                 <div className="social-icon"><i class="ri-instagram-line"></i></div>
                 <div className="social-icon"><i class="ri-facebook-circle-line"></i></div>
            </div>
       </div>
    </div>
    <div className="contact-form-main">
       <div className="contact-form-details-section">
      <div className="small-input">
        <div className="first-name">
        <TextField className='first-name' id="standard-basic" label="First Name" variant="standard" />
        </div>
      </div>
      
      <div className="small-input">
        <div className="last-name">
        <TextField className="last-name" id="standard-basic" label="Last Name" variant="standard" />
      </div>
      </div>
      <div className="small-input">
        <div className="email">
        <TextField className="email" id="standard-basic" label="Email" variant="standard" />
        </div>
      </div>
      <div className="small-input">
        <div className="phone">
        <TextField  className="phone" id="standard-basic" label="Phone Number" variant="standard" />
      </div>
      </div>
       </div>  
       <div className="contact-form-address-section">
       <TextField className='form-address' id="standard-basic" label="Write your message.." variant="standard" />
       </div> 
       <div className="save-btn"> <ColorButton className="save--btn" variant="contained">Save</ColorButton></div>
    </div>     
  </div>
  )
}

export default ContactSection
