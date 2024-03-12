import React from 'react'
import registers  from   '../assets/register.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CustomInput from '../Register/CustomInput'
import CustomTextarea from '../Register/CustomTextarea'

function Register() {
  const { register,handleSubmit,reset,formState: {errors}} = useForm()
  function submit(data) {
    console.log(data)
    reset()
  }
  return (
    <div className='register-main'>
      <Link to='/'><div className='close-window'><i class="ri-close-line"></i></div></Link>
         <div className="register-form-main">
            <div className="register-image"><img src={registers} alt="" className="reg-img" /></div>
            <div className="register-form">
                 <div className="register-form-head">Join Us !</div>
                 <div className="register-form-description">Where Every Bite Tells a Story, and Every  Moment Feels Like Home!</div>
                        <form className='form' onSubmit={handleSubmit(submit)} noValidate>
                                <div className='custom-input'>
                               <CustomInput  placeholder="Name"
                                type="text"
                                register={register}
                                name={"name"}/>
                                </div>
                                {errors.name?.message && (<p className="error-text">{errors.name.message}</p> )}
                                <div>
                                <CustomInput  placeholder="Phone Number"
                                type="number"
                                register={register}
                                name={"number"}
                                maxLength={10}
                                regxPattern={/^\d+$/}
                                validateMessage={"Not a valid phone number"}/>
                                </div>
                                {errors.number?.message && ( <p className="error-text">{errors.number.message}</p> )}
                                <div>
                                <CustomInput  placeholder="Email"
                                type="text"
                                register={register}
                                name={"email"}/>
                                </div>
                                {errors.email?.message && ( <p className="error-text">{errors.email.message}</p> )}
                                <div>
                                <CustomTextarea  placeholder="Address"
                                type="text"
                                register={register}
                                name={"address"}/></div>
                                {errors.address?.message && (<p className="error-text">{errors.address.message}</p> )}
                               <div className='submit-button'>
                                <button className='submit-btn'>Submit</button>
                               </div>
                        </form>
            </div>
         </div>
      
    </div>
  )
}

export default Register
