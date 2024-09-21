import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const {userid} = useParams()
  return (
    <div className='w-full h-56 flex justify-center items-center bg-slate-400'>

      <p className='text-4xl '>User :{userid} </p>
      
    </div>
  )
}

export default User
