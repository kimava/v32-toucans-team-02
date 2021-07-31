import React from 'react'
import Layout from '../../Layout/Layout'
import Header from '../../Navigator/Header/Header'

class Search extends React.Component{
    render(){
        return(
            <Layout>
                <Header logedIn={this.props.logedIn}/>
            </Layout>
        )
    }
}
export default Search 