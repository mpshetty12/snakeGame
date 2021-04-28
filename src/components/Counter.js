import React ,{Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment()
    {
        //this.state.count = this.state.count+5
        //var p=this.state.count;
        this.setState(prevState1 => ({
            count:prevState1.count+1
        }))
    }
    render() {
        return(
            <div>
              <h1>{this.state.count}</h1>
              <button onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter