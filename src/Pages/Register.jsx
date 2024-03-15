import React, { useState} from 'react'
import registers  from   '../assets/register.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CustomInput from '../Register/CustomInput'

import { useCustomUseMutation } from "../Hooks/useApiServices"
import { customerRegister } from "../constants/urlEndPoint"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import Loader from '../Register/Loader'
function Register() {
  const {register,handleSubmit,reset,formState: { errors },} = useForm()
  const {
    isLoading,
    isError,
    error,
    data: registerationData,
    mutateAsync,
  } = useCustomUseMutation({
    handleSuccess: successRegister,
    url: customerRegister,
    onError:handleRegistrationError,
  })

  const navigate = useNavigate()
  const [isLoader, setIsLoader] = useState(false)
	// const [showPassword, setShowPassword] = useState(false)
  return (
  <>
      <ToastContainer />
    <div className='register-main'>
      <Link to='/'><div className='close-window'><i class="ri-close-line"></i></div></Link>
         <div className="register-form-main">
            <div className="register-image"><img src={registers} alt="" className="reg-img" /></div>
            <div className="register-form">
                 <div className="register-form-head">Join Us !</div>
                 <div className="register-form-description">Where Every Bite Tells a Story, and Every  Moment Feels Like Home!</div>
                        <form className='form'  onSubmit={handleSubmit(handleRegisterUser)}  noValidate>
                                <div className='custom-input'>
                               <CustomInput  placeholder="Name  "
                                             type="text"  
                                             register={register}
                                             name={"name"}/>
                                </div>
                                {errors.name?.message && (<p className="error-text">{errors.name.message}</p> )}
                                <div>
                                <CustomInput  placeholder="Phone Number"
                                type="text"
                                register={register}
                                name={"number"}
                                maxLength={10}
                                regxPattern={/^\d+$/}
                                validateMessage={"Not a valid phone number"}/>
                                </div>
                                {errors.number?.message && ( <p className="error-text">{errors.number.message}</p> )}
                                <div>
                                <CustomInput    placeholder="Email ID"
                                                type="email"            
                                                register={register}
                                                name={"email"}
                                                validateMessage={"Not a valid email address"}/>
                                </div>
                                {errors.email?.message && ( <p className="error-text">{errors.email.message}</p>)}
                                <div>
                                <CustomInput  placeholder="Password"
                                type="password"
                                register={register}
                                name={"password"}/>
                                </div>
                                {errors.password?.message && ( <p className="error-text">{errors.password.message}</p> )}
                                <div>
                                <CustomInput  placeholder="Confirm Password"
                                type="password"
                                register={register}
                                name={"confirmpassword"}/>
                                </div>
                                {errors.confirmpassword?.message && ( <p className="error-text">{errors.confirmpassword.message}</p> )}
                                {/* <div>
                                <CustomTextarea  placeholder="Address"
                                type="text"
                                register={register}
                                name={"address"}/></div>
                                {errors.address?.message && (<p className="error-text">{errors.address.message}</p> )} */}
                               <div className='submit-button'>
                                <button className='submit-btn'>Submit </button>
                               </div>
                        </form>
            </div>
         </div>
      
    </div>
    </>
  )

  async function handleRegisterUser(data) {
    if (data.password.length < 8) {
      toast.error('Password should have minimum of  8 characters')
      return; 
    }
    if (data.password !== data.confirmpassword) {
      toast.error('Password does not match')
      return;
    }
    setIsLoader(true)
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.number,
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
    // Handle success here
  }

  function successRegister(data) {
    if (data?.data.sts === "01") {
      toast.success('Registration successful')
		navigate("/")
    } else {
      throw new Error("something went wrong")
    }
    console.log(data.data, "if of registration successfull")
  }

  function handleRegistrationError(error) {
  
    setIsLoader(false)
   
  }


}

export default Register
