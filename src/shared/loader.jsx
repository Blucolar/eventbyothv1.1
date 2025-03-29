import React from 'react'
import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
  return (
    <div className='animate-spin flex justify-center items-center'>
        <ImSpinner9 size={30} className='text-primary' />
    </div>
  )
}

export default Loader