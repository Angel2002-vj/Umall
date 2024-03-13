import React from 'react'
import TextField from '@mui/material/TextField';

const ContactText = ({placeholder,type,register,name,message,regxPattern,validateMessage,maxLength}) => {
  return (
    <>
        <TextField className='form-address' id="standard-basic" label={placeholder} variant="standard"   type={type} name={name}  {...register(name,{
        required: {
          value: true,
          message:'required *'
        },
        pattern: {
          value: regxPattern,
          message:validateMessage
        }
      })} />
    </>
  )
}

export default ContactText
