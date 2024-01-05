import React from 'react'

const Heading = ({title, desc}) => {
  return (
    <div className='form_heading'>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default Heading