import React from 'react'
import axios from '../../../service/AxiosGoogleRead'
import Layout from '../../Layout/Layout'
import Header from '../../Navigator/Header/Header'
import SearchBar from '../../Search/SearchBar/SeachBar'
import SearchWidget from '../../Search/SearchWidget/SearchWidget'

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
        //Max result indicates the amximum results of search Max number is 40 
        axios.get(`${this.state.searchValue}&maxResults=40`).then((response)=>{
          console.log(response.data)
          this.setState({books : [...response.data.items]})
         const booklist =  this.state.books
        let books = booklist.map((item)=>{
           return `Book title:${item.volumeInfo.title }`
        })

        // Show the results in  a p tag
        let text=''
        books.forEach((element) => {
           
           text += element + '<br/>'
        });
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
                <SearchWidget bookItems={this.state.books}/> 
            </Layout>
        )
    }
}
export default Search 