import React from 'react'
import './SearchWidget.css'

class SearchWidget extends React.Component {
 
render(){
   const  books= this.props.bookItems
   console.log("Rendering Book Lists started",books)
   const listElements=[]
   for(let i in books)
   {
     let  element = <div>
       <img src={books[i].volumeInfo.imageLinks.smallThumbnail} alt={books[i].volumeInfo.title} />
       <p>Title :{books[i].volumeInfo.title}</p>
       <p >Autor :{books[i].volumeInfo.authors}</p>
       <p>Published :{books[i].volumeInfo.publishedDate}</p>
       <button >ADD to list</button>
  </div>
   listElements.push(element)
   }
   
   console.log(listElements)
    return (
        <div className="list_container">
           {listElements}
        </div>
        
    )
    }
}

export default SearchWidget