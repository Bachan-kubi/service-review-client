import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import OrdersRaw from './OrdersRaw';

const Orders = () => {
    const {user, logOut}=useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        //1 if there user lead data
        if(user){
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
              headers:{
                authorization: `Bearer ${localStorage.getItem('car-token')}` 
              }
            })
            .then(res=>{
              if(res.status === 401 || res.status === 403){
                logOut();
              }
              return res.json()
            })
            .then(data=>setOrders(data));
        }

        //2 user optional chair to laod data

        // fetch(`http://localhost:5000/orders?email=${user?.email}`)
        //     .then(res=>res.json())
        //     .then(data=>setOrders(data));
    },[user]);
    // [user?.email] using in dependencies not deleting in UI. * once deleted, now not.

      //   delete data
  const handleDelete= id=>{
    console.log(id);
    const proceed = window.confirm('Sure? Want to Erase?')
    if(proceed){
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
  
              const remaining = orders.filter(odr=>odr._id !== id);
  
              setOrders(remaining);
              alert('Deleted Successfully!');
            }
        })
    }
  }

  const handleStatusUpdate=(id)=>{
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'Approved'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      // approved fucntions from pending
      if(data.modifiedCount>0){
        const remaining = orders.filter(ord=>ord._id!==id);
        const approving = orders.find(ord=>ord._id===id);
        approving.status = 'Approved';
        const newOrder = [...remaining, approving];
        setOrders(newOrder);
      }
    })
  }

    return (
        <div>
            <h3>You have {orders.length} orders.</h3>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
  
    <thead className='flex items-center'>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map(order=><OrdersRaw key={order._id} order={order} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate}/>)
        }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Orders;