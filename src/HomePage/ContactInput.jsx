import React from 'react'
import TextField from '@mui/material/TextField';
const ContactInput = ({placeholder,type,register,name,message,regxPattern,validateMessage,maxLength}) => {
  return (
    <div className="first-name">
        <TextField className='first-name' id="standard-basic" label={placeholder} variant="standard"  type={type} name={name}  {...register(name,{
        required: {
          value: true,
          message:'required *'
        },
        pattern: {
          value: regxPattern,
          message:validateMessage
        }
      })}/>
        </div>
  )
}

export default ContactInput
