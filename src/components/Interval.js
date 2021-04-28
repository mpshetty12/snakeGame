import React,{Component} from 'react'

class Intervalee extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            count : 0
        }
    }
    componentDidMount()
    {
        this.Interval = setInterval(this.tick,1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.Interval);
    }
    tick = () =>{
       this.setState({
           count : this.state.count+1
       })    
    }

    render()
    {
        return   <h1>{this.state.count}</h1>
    }
}

export default Intervalee