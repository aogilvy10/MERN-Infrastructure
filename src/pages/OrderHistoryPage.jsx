import React from 'react';
import * as userService from '../ultilities/users-service';


const OrderHistoryPage = () => {

  const handleCheckToken = async () => {
    const expDate = await userService.checkToken()
    console.log(expDate);
  }



  return (
    <>
      <h1>Order Order History Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  )
}

export default OrderHistoryPage
