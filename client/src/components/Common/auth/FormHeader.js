import React from 'react';

const FormHeader = ({title,desc}) => {
  return (
    
    <div className='form_heading'>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default FormHeader