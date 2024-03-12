import React from 'react'

const CustomTextarea = ({placeholder,type,register,name,message,regxPattern,validateMessage,maxLength}) => {
  return (
    <div className="register-textarea">
    <input className='text-field' placeholder={placeholder}  maxLength={maxLength}  type={type} name={name}  {...register(name,{
        required: {
          value: true,
          message:'required *'
        },
        pattern: {
          value: regxPattern,
          message:validateMessage
        }
      })} />
</div>
  )
}

export default CustomTextarea
