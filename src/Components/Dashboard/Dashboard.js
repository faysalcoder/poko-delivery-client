import React from 'react';


import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Dashboard = () => {
    const { user } = useAuth();
    console.log(user)
    return (


        <div className='container mt-3'>
            <div className="text-center">
                <Link to='/addservice'><button className="btn custom-btn me-2">Add New Service</button></Link>
                <Link to='/myorders'><button className="btn custom-btn me-2">My Orders</button></Link>
                <Link to='/manageallorders'><button className="btn custom-btn">Manage All Orders</button></Link>
            </div>

            <div className="text-center my-5">
                <h4>{user.displayName}</h4>
                <img src={user.photoURL} alt="" />
            </div>




        </div>




    );
};

export default Dashboard;