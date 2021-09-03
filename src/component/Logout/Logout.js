
import {  useState } from 'react';

import { useHistory } from "react-router-dom";




const Logout =({authService, loggedIn})=>{
    const [uid , setUid]=useState(null)
    let history = useHistory()
   authService.getStatus(setUid)

   try{
         authService.logout()
         history.push("/");
   }catch(err){
      console.log(err)
   }
      return(
          <>
          </>
      )
}
export default Logout