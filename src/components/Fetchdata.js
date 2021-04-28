import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Fetch()
{
    const [posts,setPosts] = useState([])
    const [id,setId] = useState(4)
    const [clickHand,setClickHand] = useState(1)
    useEffect(
        ()=>{axios.get(`https://jsonplaceholder.typicode.com/posts/${clickHand}`)
        .then(
             res=>{
                 console.log(res)
                setPosts(res.data)
             }
        ) 
        .catch(
            err=>{
                console.log("error")
            }
        )
        },[clickHand!=0])
    const ClickHandler = ()=>
    {
       setClickHand(id)
    }
    return(
        <div>
           <input type="number" value={id} onChange={e=>setId(e.target.value)}></input> 
           <button onClick={ClickHandler}>Fetch Post</button>
           <h3>{posts.title}</h3>
        </div>
    )
}

export default Fetch