import React from 'react'

const jwtverify = () => {
   
    const handleverify = async() =>{
       try{
        const response = await fetch('auth/request-otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
       }catch(error)
       {

       }
    };


  return (
    <div className='register-container'>
    <div>jwtverify</div>
    <button onclick={handleverify} >Verify</button>
    </div>
  )
}

export default jwtverify