import React from 'react'
import Layout from '../../Layout/Layout'
import Header from '../../Navigator/Header/Header'

class MyList extends React.Component{
    render(){
        const sty={
            'margin-Top':'80px',
        }
        return(
            <Layout>
                <Header logedIn={this.props.logedIn}/>
                <h2 style={sty} >hi</h2>
            </Layout>
        )
    }
}
export default MyList