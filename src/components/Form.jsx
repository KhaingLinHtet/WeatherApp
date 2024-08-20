import React, { useRef } from 'react'

const Form = ({fetchWeather}) => {

  const searchKey =useRef('')


  return (
    <div className='w-100 d-flex justify-content-center mt-3'>
      <input type='text' ref={searchKey} className='form-control ms-5' placeholder='Country' ></input>
      <input type='button' onClick={()=>fetchWeather(searchKey.current.value)} value='Search' className='btn ms-2 me-5 bg-dark text-white'></input>
    </div>
  )
}

export default Form
