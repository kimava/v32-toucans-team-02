import React, { useEffect, useState } from 'react'
import './Profile.css'
import editProfile from '../../Assets/select_file.png'
import {firebaseDatabase ,  firebaseStorage} from '../../service/firebase'



const type=['image/png', 'image/jpeg']
const Profile=(props)=>{
   const [uid , setUid]=useState(null)
   const [name,setName]=useState('')
   const [lastName , setLastName]=useState('')
   const [bookGenre, setBookGenre]=useState([])
   const [profileImg , setProfileImg]=useState('https://firebasestorage.googleapis.com/v0/b/booklog-15241.appspot.com/o/Unknown_person.jpg?alt=media&token=76fdd940-398b-44e7-b82f-fbbedefb900c')
   const [err, setErr]=useState(null)


   useEffect(()=> {
       try{
        let data=  getUserData(uid)
        console.log(data)
       }
       catch{
           console.log('cant get data')
       }
   
   },[])
   
  const  getUserData=(userId)=> {
        // [START rtdb_read_once_get]
        const dbRef =firebaseDatabase.ref();
        dbRef.child("users").child(userId).get().then((snapshot) => {
          if (snapshot.exists()) {
         let data=  snapshot.val()
         //setUid(data.uid)
        setName(data.name)
        setLastName(data.lastName)
        setBookGenre(data.bookGenre)
        setProfileImg(data.profileImg)
        console.log('data profile img :', data.profileImg)
        if(data.profileImg===''){
           
            data.profileImg='https://firebasestorage.googleapis.com/v0/b/booklog-15241.appspot.com/o/Unknown_person.jpg?alt=media&token=76fdd940-398b-44e7-b82f-fbbedefb900c'
            
        }
        return data
          } else {
              console.log('snapshot didn\'t exist')
            return null 
          }
       
        }).catch((error) => {
          console.error(error)
        })
    }

  const inputNameChangeHandler =()=>
   {
    setName(document.getElementById('name').value)
   }

  const inputlastNameChangeHAndler=()=>{
    setLastName(document.getElementById('lastName').value) 
   }


 const  selectfavoriteGenreHandler=(event)=>{
    event.preventDefault()
    let value = Array.from(event.target.selectedOptions, option => option.value);
    setBookGenre(value)
   }

  const selectFileHandler =(event)=>{
    let selected = event.target.files[0] 
    if(selected && type.includes(selected.type)){
        setErr('')
        const storageRef = firebaseStorage.ref(selected.name)
        storageRef.put(selected).on('state_changed', (snap)=>{
           // let percentage=(snap.bytesTransferred/snap.totalBytes)*100
            
        }, (err)=>{
            setErr(err)
        } , async()=>{
           const url = await storageRef.getDownloadURL()
           setProfileImg(url)
           console.log('firebase profile Imgurl in select file handler :', profileImg)
        }) 
    }
    else{
        setProfileImg(null)
        setErr('Choose right file format')
    }
     
        setProfileImg(event.target.files[0])
        console.log(profileImg)
    
   }

   const isSelected=(genre)=>{
       if(bookGenre.length>0){
           for (let i in bookGenre){
               if (bookGenre[i]===genre)
                return true
           }
       }
       return false
   }
  const  formSubmitHandler=(event)=>{
       event.preventDefault()
       const frmData={
           uid:uid,
           name:name,
           lastName:lastName,
           bookGenre:bookGenre,
           profileImg:profileImg

       }
       console.log(frmData)
      props.submit(frmData)
   }
        return(
            
            <form  onSubmit={formSubmitHandler}>
			<div className="form_container">
				<div className="img_container">
					<img className="profie_img" src={profileImg} alt="Profile"  />
                    <label>
                   		<input type="file" onChange={selectFileHandler} />
                        <span><img className="select_file" src={editProfile} alt="select file" /></span>
                        </label>
                    <div className="error" >{err}</div>
				</div>
				<div className="element_container">
					<div >
                         <label>Name :</label> <input type='text' id="name" value={name} onChange={inputNameChangeHandler}   />
                     </div>
                    <div>
                        <label>Last name :</label> <input type='text' id="lastName"  value={lastName} onChange={inputlastNameChangeHAndler} />
                    </div>
                   
                    <div className="book_genre" >
                        <label >Select youtr favorite genres </label>
                        <select id="genres" multiple className="select_genre" onChange={selectfavoriteGenreHandler}  >
                          
                              { isSelected('Fiction')?<option  selected value="Fiction" >Fiction</option>:<option  value="Fiction" >Fiction</option>}
                              { isSelected('Mystery')? <option selected value="Mystery" >Mystery</option>: <option value="Mystery" >Mystery</option>}
                               {(isSelected('Thriller'))? <option selected value="Thriller" >Thriller</option>: <option value="Thriller" >Thriller</option>}
                              { (isSelected('Horror'))? <option selected value="Horror" >Horror</option>: <option value="Horror" >Horror</option>}
                           
                        </select>
                    </div>
				</div>
				 <input type="submit" value="Submit"  />
			</div>
		</form>
        )
    
}
export default Profile