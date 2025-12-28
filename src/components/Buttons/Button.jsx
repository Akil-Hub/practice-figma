import React from 'react'

const Button = ({text}) => {
  return (
    <button className='text-white bg-primary rounded-md px-8 py-3 border border-primary hover:border hover:border-white hover:bg-transparent duration-300'>{text}</button>
  )
}

export default Button