import React, {useState,useEffect,Component} from "react"
// clas Counter extends Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state = {
//             count : 0
//         }
//     }
//     componentDidMount(){
//         document.title = `clicked ${this.state.count} times`
//     }
//     componentDidUpdate(prevProps,prevState){
//         document.title = `clicked ${this.state.count} times`
//     }

//     render()
//     {
//         return(
//             <div>
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>
//                     clicked {this.state.count} times
//                 </button>
//             </div>
//         )
//     }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function Counter()
// {
//     const [count, setCount] = useState(0)
//     useEffect(()=>{
//         document.title = `clicked ${count} times`
//     })
//     return(
//         <div>
//             <button onClick={()=>{setCount(count+1)}}>
//                 clicked {count} times     
//             </button> 
//         </div>
//     )
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Counter()
{
    const [count,setCount] = useState(0)
    const [name, setName] = useState("")
    useEffect(
        ()=>{
           console.log("updated") 
        },[count]
    ) 
    return (
        <div>
            <input type="text" vlaue={name} onChange={e=>setName(e.target.value)}>
            </input>
            <button onClick={()=>{setCount(count+1)}}>
                clicked {count} times
            </button>
        </div>
    )
}
export default Counter;