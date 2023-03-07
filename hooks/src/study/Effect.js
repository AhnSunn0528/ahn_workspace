import React, {useState, useEffect} from 'react';

const Effect = (props) => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');
    
    const handleCountUpdate = () => {
        setCount(count + 1);
    }

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    useEffect(() =>{
        //console.log('랜더링 짝짝~~!!');
        console.log('Count 변화~~~');
    }, [count]);

    useEffect(() =>{
        //console.log('랜더링 짝짝~~!!');
        console.log('Name 변화~~~');
    }, [name]);

    return (
        <>
            <div>
                <button onClick={handleCountUpdate}>Update</button>             
                <span>count : {count}</span>
                <input type="text" value={name} onChange={handleInputChange}/>
                name : {name}
            </div>
        </>
    )
}
export default Effect;