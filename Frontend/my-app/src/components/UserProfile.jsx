import React, { Fragment } from 'react';
import '../Styles/UserProfile.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {toast, ToastContainer} from 'react-toastify'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import backGif from '../assets/images/icons8-back.gif';

const UserProfile = () => {
    const user = {
        id:1,
        username: 'Doraemon',
        email: 'doraemon@gmail.com',
        password: '',
        userImage: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png',
        phoneNo:'1234567890',
        address: 'home no33, sector9, Ghaziabad, U.P.',
        pincode: 234567,
        password: 'abc@gmail.com'
    }

    const notify = (e) => {
        e.preventDefault();
        toast("Password Updated Successfully!");
    }

    return (
    <Fragment>
        <Helmet>
            <title>User Profile</title>
        </Helmet>  

        {/* Header Section */}
        <header>
            <div className='continue-shopping'>
                <img src={backGif} alt='left-arrow' className='arrow-icon'/>
                <h3>Continue Shopping</h3> 
            </div>
                    
            <div className='cart-icon'>
                <img src="https://img.icons8.com/material-rounded/48/12B886/user-male-circle.png" alt='user-icon' />
            </div>
        </header> 
          
        {/* main section */}
            
        <div className="profileContainer">
            <div>
                <h1>User Profile</h1>
                <img src={user.userImage} alt={user.username} />
                <Link to="/update/user">Edit Profile</Link>
            </div>
                    
            <div>
                <div>
                    <h4>Username</h4>
                    <p>{user.username}</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>{user.email}</p>
                </div>
                <div>
                    <h4>Mobile Number</h4>
                    <p>{user.phoneNo }</p>
                </div>
                        
                <div>
                    <h4>Address</h4>
                    <p>{user.address }</p>
                </div> 
                        
                <div>
                    <h4>Pincode</h4>
                    <p>{user.pincode }</p>
                </div> 
                <div>
            {/* <Link to="/orders">My Orders</Link> */}
                <Popup
                    trigger={<button className='change-passwordbtn'>Change Password</button>} position="top center"      
                >
                    <form
                        className="updatePasswordForm"
                    >
                        <h5 className='mx-sm-3 my-sm-3 text-lg popup-heading'>Update Password</h5>
                        <input
                            className='form-control mt-2 mx-sm-3'
                            type="password"
                            placeholder="Old Password"
                            required
                        />

                        <input
                            className='form-control mt-2 mx-sm-3'
                            type="password"
                            placeholder="New Password"
                            required                    
                        />
                        
                        <input
                            className='form-control mt-2 mx-sm-3'
                            type="password"
                            placeholder="Confirm Password"
                            required
                        />
                        
                        <button
                        type="submit"
                        value="Change"
                        className="updatePasswordBtn btn btn-danger btn-lg mt-2 mx-sm-3"
                        onClick={notify}                      
                        >
                            Update
                        </button>    
                    </form>
                    <ToastContainer/>                  
                </Popup>
                            
            {/* // <Link to="/password/change">Change Password</Link> */}
            </div>
        </div>
    </div>      
    </Fragment>
  )
}

export default UserProfile
