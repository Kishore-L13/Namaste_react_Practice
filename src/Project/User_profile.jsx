import React, { useState } from 'react'
const user = {
  name: 'Jane Doe',
  bio: 'Frontend developer who loves React and coffee ☕️',
  image: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg'
};

const User_profile = () => {
    const [isVisible , setIsVisible] = useState(false)
const toggle=()=>{
    setIsVisible(prev => !prev)
}
  return (
    <div>
        <img src={user.image}/>
        <h2>{user.name}</h2>
        <button onClick={toggle}>
            {isVisible ?"Hide Bio":"Show Bio"}</button>
             {isVisible && <p>{user.bio}</p>}
    </div>
  )
}

export default User_profile