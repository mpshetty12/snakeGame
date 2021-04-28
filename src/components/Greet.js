import React,{Component} from 'react'

// const greet = (props) =>{
//     return (
//           <h1>Hello {props.name} , you are in class {props.class}</h1>
//     )    
// }

class Greet extends Component{
    render(){
        return(
            <h1>Hello {this.props.name} , you are in class {this.props.class}</h1>
        )
    }
}


export default Greet;