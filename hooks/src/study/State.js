import React, {useState} from 'react';

const heavyWork = () => {
    return ['홍길동, 김민수']; // Json 으로 데이터 받아올 때 사용하면 될 듯
}

const State = (props) => {
    const [time, setTime] = useState(1);
    const [names, setNames] = useState(() => {
        return heavyWork();
    });
    const [input, setInput] = useState('');

    const handleCLick = () => {
        let newTime;
        if(time >= 12){
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime);
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleUpload = () => {
        setNames((prevState)=>{
            return [... prevState, input]; // 이전 값들 + 새로운 인풋값 추가
        });
    }

    return (
        <>
            <div>
                <span>현재시각 : {time}시 </span> 
                <button onClick={handleCLick}>Update</button>
            </div>
            <div>
                <input type="text" value={input} onChange={handleInputChange}/>
                <button onClick={handleUpload}> Upload</button>
                { names.map((name, idx)=>{
                    return <p key={idx}>{name}</p>;
                }) }
            </div>
        </>
    )
}
export default State;