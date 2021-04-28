import React, {Component} from 'react'

class Message extends Component{
    constructor()
    {
        super()
        this.state = {
            message:"Please subscribe my channel"
        }
    }
    subscribe()
    {
      this.setState({
          message:"Thank you for subscribing"
      })
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.subscribe()}>Click to subscribe</button>
            </div>
        )
    }
}

export default Message