import React from 'react'
import Layout from '../../Layout/Layout'
import Header from '../../Navigator/Header/Header'
import SearchBar from '../../Search/SearchBar/SeachBar'

class Search extends React.Component{
    render(){
        return(
            <Layout>
                <Header logedIn={true}/>
                <SearchBar />
            </Layout>
        )
    }
}
export default Search 