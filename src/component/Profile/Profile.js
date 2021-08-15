import React from 'react'
import './Profile.css'

const type=['image/png', 'image/jpeg']
class Profile extends React.Component{
    state={
        name:'',
        lastName:'',
        bookGenre:[],
        profileImg:null,
        err:null,
    }

   inputNameChangeHAndler =()=>
   {
    this.setState({name:document.getElementById('name').value})
   }

   inputlastNameChangeHAndler=(eve)=>{
    this.setState({lastName:document.getElementById('lastName').value})
   }


   selectfavoriteGenreHandler=(event)=>{
    event.preventDefault()
    let value = Array.from(event.target.selectedOptions, option => option.value);
    this.setState({bookGenre:value})
   }

   selectFileHandler =(event)=>{
    let selected = event.target.files[0] 
    if(selected && type.includes(selected.type)){
        this.setState({profileImage:selected})
        
    }
    else{
        this.setState({profileImage:null})
        this.setState({err:'Choose right file format'})
    }
    
    this.setState({
        profileImg: event.target.files[0],
      })
   }

   formSubmitHandler=(event)=>{
       event.preventDefault()
       this.props.submit(this.state)
   }
   
    render(){
        return(
            <div className="profile_container">
                 <form  className='profile_form' onSubmit={this.formSubmitHandler}>
                     <div>
                         <label>Name :</label> <input type='text' id="name" value={this.state.name} onChange={this.inputNameChangeHAndler}></input>
                     </div>
                    <div>
                        <label>Last name :</label> <input type='text' id="lastName"  value={this.state.lastName} onChange={this.inputlastNameChangeHAndler}></input>
                    </div>
                   
                    <div className="book_genre" style={{width:'500px'}}>
                        <p>Select youtr favorite genres  </p>
                        <select id="genres" multiple  onChange={this.selectfavoriteGenreHandler}>
                            <option value="Fiction" >Fiction</option>
                            <option value="Mystery" >Mystery</option>
                            <option value="Thriller" >Thriller</option>
                            <option value="Horror" >Horror</option>
                        </select>
                    </div>
                    <div >
                        <label>Profile image:</label><input type='file' name="file" onChange={this.selectFileHandler}/>
                    </div>
                    <input type="submit" value="Submit" />
                   
                </form>
            </div>
        )
    }
}
export default Profile