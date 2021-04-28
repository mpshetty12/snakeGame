import React , {Component,useState,useEffect} from "react"

// class Mouse extends Component{
 
//    constructor(props)
//    {
//        super(props)
//        this.state = {
//           x : 0,
//           y : 0
//        }
//    }
//    logMousePosition1 = e => {
//        this.setState({x:e.clientX, y:e.clientY})
//    }
//    componentDidMount(){
//        window.addEventListener("mousemove",this.logMousePosition1)
//    }
//    render()
//    {
//        return(
//            <div>
//                 X={this.state.x} and Y={this.state.y}
//            </div>
//        )
//    }
// }
function Mouse ()
{
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const logMousePosition = e =>{
        setX(e.clientX);
        setY(e.clientY);
    } 
    useEffect(
        ()=>{
            console.log("updating")
            window.addEventListener("mousemove",logMousePosition)
        },[]
    )
    return(
        <div>
            X---{x} and Y---{y}
        </div>
    )
}
export default Mouse;