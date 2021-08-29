import { Redirect } from 'react-router'
import './SearchBar.css'


const  SearchBar=(props)=>{
    if(!props.loggedIn){
        console.log("Not logged in ")
        return <Redirect to='/' exact/>
     }

        return (
            <form onSubmit={props.submit} className='search_bar' >
                <input type='search' id="search" onKeyPress={props.search}  />
            </form>
        )
    
}
export default SearchBar