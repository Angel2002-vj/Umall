import React from 'react'

const CustomInput = ({placeholder,type,register,name,message,regxPattern,validateMessage,maxLength}) => {
  return (
    <div className="register-input">
    <input className='input-field' maxLength={maxLength} placeholder={placeholder} type={type} name={name}  {...register(name,{
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

export default CustomInput
