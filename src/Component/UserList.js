import React from 'react'
import './Style.css'
const UserList = ({users}) => {
    return (
        

<div className="wrapper">
<div className="card">
  {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
  <div className="container">
    <h4><b><h1>{users.name}</h1></b></h4>
    <p>{users.email}</p>
  </div>
</div> 
</div>
    )
}

export default UserList
