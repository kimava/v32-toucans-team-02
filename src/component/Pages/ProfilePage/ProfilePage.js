import axios from 'axios'
import React from 'react'
import Layout from '../../Layout/Layout'
import Header from '../../Navigator/Header/Header'
import Profile from '../../Profile/Profile'

class ProfilePage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            lastName:'',
            bookGenre:[],
            profileImg:null,
        }

    }
    submitedFormHandler=(formData)=>{
        this.setState({name:formData.name})
        this.setState({lastName:formData.lastName})
        this.setState({bookGenre:formData.bookGenre})
        this.setState({profileImg:formData.profileImg})
        const profileData={
            uid : 200 ,
            name:formData.name,
            lastName:formData.lastName,
            bookGenre:formData.bookGenre, 
            profileImg:formData.profileImg,
        }
        axios.post(`https://reactmain-d7740-default-rtdb.asia-southeast1.firebasedatabase.app/profileData.json`, profileData)
        .then(response=>{
            console.log(response)
        }).catch(err=>console.log(err))
    }
    render(){
        return(
            <Layout>
                 <Header logedIn={this.props.logedIn}/> 
                <h2>Profile</h2>
                <Profile submit={this.submitedFormHandler}/>
            </Layout>
        )
    }
}
export default ProfilePage