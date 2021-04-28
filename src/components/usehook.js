import React , {useState} from 'react'

function Usehook() {

    const [count,setCount] = useState(0);
    const [name,setName] = useState({first_name : "",second_name:""});

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count {count}</button>

            <input type="text"
              value={name.first_name}
              onChange={e => setName({...name, first_name : e.target.value})}
            >    
            </input>
            <input type="text"
              value={name.second_name}
              onChange={e=>setName({...name, second_name : e.target.value})}
             >
            </input>
            <h1>{name.first_name} {name.second_name}</h1>
        </div>
    )
}

export default Usehook
