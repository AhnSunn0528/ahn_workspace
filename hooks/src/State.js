import React, {useState} from 'react';

const heavyWork = () => {
    return ['홍길동', '테스트'];
}

const State = (props) => {
    const [time, setTime] = useState(1);
    const [names, setNames] = useState(()=>{
        heavyWork();
    });
    const [input, setInput] = useState('');

    const handleClick = () => {
        let newTime;
        if(time >= 12){
            newTime =1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime);
    }

    const handleUpload = () => {
        setNames((prevValues) => {
            return [...prevValues, input];
        });
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
        <div>
            <span>현재시각 : {time}시</span>
            <button onClick={handleClick}>Upload</button>
        </div>
        <div>
            <input type="text" value={input} onChange={handleInputChange}/>
            <button onClick={handleUpload}>Upload</button>
            {names.map((name, idx)=>{
                return <p key={idx}>{name}</p>;
            })}
        </div>
        </>
    )
}
export default State;