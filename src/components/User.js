import React from 'react'

function User(props) {
  return (
    
    <div>Users
        {console.warn(props.data.name)}
    </div>
  )
}

export default User