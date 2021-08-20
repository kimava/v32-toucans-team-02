import React , {useContext} from 'react'
import './SearchWidget.css'
import { SearchContext } from '../../Pages/Search/search-context'
import img from '../../../Assets/unknownImage.png'


const  SearchWidget =()=> {
 const bookResultContext = useContext(SearchContext)
const loadBooks =()=>{
   //console.log('Search widget :',bookResultContext.resultBooks)
  let books = bookResultContext.resultBooks
   console.log(books)
   let listElements =[]
    if(books){
    for(let i in books)
    {
      
      let imgsrc='/Assets/unknownImage.png'
      try{
        imgsrc =books[i].volumeInfo.imageLinks.smallThumbnail
      }catch(err){
        imgsrc =img
      }
       let  element = <div key={i}>
        <img src={imgsrc} alt={books[i].volumeInfo.title} />
        <p>Title :{books[i].volumeInfo.title}</p>
        <p >Autor :{books[i].volumeInfo.authors}</p>
        <p>Published :{books[i].volumeInfo.publishedDate}</p>
        <button >ADD to list</button>
   </div>
    listElements.push(element) 

    }
   
   } 
   return listElements
 }

   

    return (
        <div className="list_container">
          {loadBooks()}
        </div>
        
    )
    
}

export default SearchWidget