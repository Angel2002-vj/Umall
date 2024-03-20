
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form'
import { useCustomUseMutation } from "../Hooks/useApiServices"
import { sendMessage } from "../constants/urlEndPoint"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
const ContactSection = () => {
    const ColorButton = styled(Button)(({ theme }) => ({
      
        backgroundColor: '#3E56A2',
        '&:hover': {
          backgroundColor: '#3E56A2',
        },
      }));

      const {register,handleSubmit,reset,formState: { errors },} = useForm()
      const {
        isLoading,
        isError,
        error,
        data:messageData,
        mutateAsync,
      } = useCustomUseMutation({
        handleSuccess: successMessageSend,
        url: sendMessage,
        onError:handleMessageError,
      })
      const navigate = useNavigate()
      const [isLoader, setIsLoader] = useState(false)
  return (
    <>
      <ToastContainer />
    <div className="contact-form-section">
    <div className="contact-information-section">
        <div className="contact-information-section-info">
            <div className="contact-information-head">Contact Information</div>
            <div className="contact-information-description">Say something to start a live chat!</div>
            <div className="contact-information"><div className="contact-icon"><i class="ri-phone-fill"></i></div><div className="contact-data">9562488888</div></div>
            <div className="contact-information"><div className="contact-icon"><i class="ri-mail-fill"></i></div><div className="contact-data">info.tigavision@gmail.com</div></div>
            <div className="contact-information"><div className="contact-icon"><i class="ri-map-pin-2-fill"></i></div><div className="contact-data">Kunnathuvalappil Plaza, Anakkalu Avinissery Thrissur 680306</div></div>
            <div className='social-media--links'>
                 <div className="social-icon"><i class="ri-instagram-line"></i></div>
                 <div className="social-icon"><i class="ri-facebook-circle-line"></i></div>
            </div>
       </div>
    </div>
 <form className="contact-form-main"  onSubmit={handleSubmit(handleMessage)}  noValidate>
    <div className="contact-form-info">
       <div className="contact-form-details-section">
      
      <div className="small-input">
        <div className="first-name">
        <TextField className='first-name' id="standard-basic" label="First Name" variant="standard"   placeholder='First Name' type='text' name={'firstname'} {...register('firstname',{
        required: {
          value: true,
          message:'required *'
        }
      })}/>
         {errors.firstname?.message && (<div className="error-text">{errors.firstname.message}</div> )}
        </div>
      </div>
      
      <div className="small-input">
        <div className="last-name">
        <TextField className="last-name" id="standard-basic" label="Last Name" variant="standard"  placeholder='Last Name' type='text' name={'secondname'} {...register('secondname',{
        required: {
          value: true,
          message:'required *'
        }
      })}/>
         {errors.secondname?.message && (<div className="error-text">{errors.secondname.message}</div> )}
      </div>
      </div>
      <div className="small-input">
        <div className="email">
        <TextField className="email" id="standard-basic" label="Email" variant="standard" placeholder='Email' type='email' name={'email'} {...register('email',{
        required: {
          value: true,
          message:'required *'
        },
      
      })}/>
         {errors.email?.message && (<div className="error-text">{errors.email.message}</div> )}
        </div>
      </div>
      <div className="small-input">
        <div className="phone">
        <TextField  className="phone" id="standard-basic" label="Phone Number" variant="standard" placeholder='Phone Number' type='text' maxLength={'10'} name={'number'}  {...register('number',{
        required: {
          value: true,
          message:'required *'
        },
        pattern: {
          value: '/^\d+$/',
          message:'invalid message'
        }
      })}/>
         {errors.number?.message && (<div className="error-text">{errors.number.message}</div> )}
      </div>
      </div>
       </div>  
       <div className="contact-form-address-section">
       <TextField className='form-address' id="standard-basic" label="Write your message.." variant="standard"  type='text' name={'message'} {...register('message',{
        required: {
          value: true,
          message:'required *'
        }
      })}/>
      <div className='error-div'> {errors.message?.message && (<div className="error-text">{errors.message.message}</div> )}</div>
       
       </div>  
       <div className="save-btn"> <button className="save--btn" variant="contained">Send Message</button></div>
    </div> 
    </form>
  </div>
  </>
  )

  async function handleMessage(data) {
     

    
    
    setIsLoader(true)
    const body = {
      name:data.firstname + ' ' + data.secondname,
      email: data.email,
      number: data.number,
      message: data.message,
    }
    console.log(body)
    try {
      await mutateAsync(body)
    } catch (error) {
      console.log(error,'xvxxxxxxxxvxxxxxxxxxxxxxxvxvvvvvvvvv')
      if (error?.msg?.email) {
        toast.error(error.msg.email[0])
      } else if (error?.message) {
        toast.error(error.message)
      }
      toast.error(error.msg)
    }
   
  }

  function successMessageSend(data) {
    if (data?.data.sts === "01") {
      toast.success('message send successfully')
		navigate("/")
    } else {
      throw new Error("something went wrong")
    }
    console.log(data.data, "if of message send successfull")
  }

  function handleMessageError(error) {
  
    setIsLoader(false)
   
  }
}

export default ContactSection