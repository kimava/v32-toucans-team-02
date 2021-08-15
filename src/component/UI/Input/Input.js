import React from 'react'
import './Input.css'
import Wrapper from '../../../hoc/Wrapper'

class Input extends React.Component{
render(){
    let elementType = this.props.elementType
    let elementConfig =this.props.elementConfig
    let type = elementConfig.type
    let className =`${this.props.elementType }-${type}`
    let inputElement =null
    switch (elementType)
    {
       case 'input':{
           inputElement =(<input type ={type} className={className}></input>)
           break
       }
       case 'label':{
           inputElement =(<label>{this.props.value}</label>)
           break
        }
           

       default:
        inputElement =(<input type ={type} className={className}></input>)
    }
    return(
        <Wrapper>
            {inputElement}
        </Wrapper>

    )
}
}
export default Input