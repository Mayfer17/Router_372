import React from 'react'; 

import { useParams } from 'react-router-dom'; 

 

function User() { 


  const { userId } = useParams(); 

 

  return ( 

    <div> 

      <h2>User Page</h2> 

      <p>User ID: {userId}</p> 

    </div> 

  ); 

} 

 

export default User; 