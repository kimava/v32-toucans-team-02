import React from 'react'
import axios from '../../../AxiosGoogleRead'
import Layout from '../../Layout/Layout'
import Header from '../../Navigator/Header/Header'
import SearchBar from '../../Search/SearchBar/SeachBar'

class Search extends React.Component{
    state={
        searchValue:'',
        books:[],
    }

    getSearchValueHandler=(e)=>{
        const key = e.target.value
        this.setState({searchValue:key})
     
    }   
    searchHandler=(e)=>{
        e.preventDefault()
       axios.get(`${this.state.searchValue}`).then((response)=>{
          console.log(response.data)
          this.setState({books : response.data})
         const booklist =  this.state.books.items
         console.log(booklist)
        let books = booklist.map((item)=>{
           return `Book title:${item.volumeInfo.title }`
        })
        let text=''
        books.forEach((element) => {
           
           text += element + '<br/>'
        });
        console.log(text)


          document.querySelector('#result').innerHTML=text
       }).catch((err)=>{
           console.log('error',err)
       })
    } 
    render(){
        return(
            <Layout>
                <Header logedIn={this.props.logedIn}/>
                <SearchBar submit={this.searchHandler} search={this.getSearchValueHandler} />
                <p id="result"></p>
            </Layout>
        )
    }
}
export default Search 