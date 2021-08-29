import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import Header from '../../Navigator/Header/Header'
import Profile from '../../Profile/Profile'
import {firebaseDatabase} from '../../../service/firebase'
import { Redirect } from "react-router-dom"


const ProfilePage =(props)=>{
    const [message, setMessage]=useState(null)
    console.log(props.uid)
   
   const submitedFormHandler=(formData)=>{
        const profileData={
            uid : formData.uid ,
            name:formData.name,
            lastName:formData.lastName,
            bookGenre:formData.bookGenre, 
            profileImg:formData.profileImg,
        }
        firebaseDatabase.ref('users/' + profileData.uid).set(profileData, (error) => {
            if (error) {
                setMessage('Your profile couldn\'t be Updated  ')
            } else {
               
               setMessage('Your profile Updated sucessfuly ')
            }
          });
    }
    /* if(!props.loggedIn){
        return <Redirect to='/' exact/>
     } */
        return(
            <>
                <Layout>
                    <Header logedIn={props.loggedIn}/> 
                    <h2>Profile</h2>
                    <Profile submit={submitedFormHandler}  uid={props.uid} /> 
                    <p style={{color:'gray', textAlign:'center'}}>{message}</p>
                </Layout>
            </>
        )
   
}
export default ProfilePage