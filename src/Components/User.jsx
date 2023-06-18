import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {
    const params=useParams();
    const nevigation=useNavigate();

    console.log(params.id);
  return (
    <div className='user'>
        <button onClick={()=>nevigation("/about") }>Click Me</button>
      User
    </div>
  )
}

export default User
