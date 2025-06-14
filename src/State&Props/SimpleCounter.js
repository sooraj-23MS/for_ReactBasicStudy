import { useState } from "react"

export default function SimpleCounter() {
    const [count,setCount] = useState(0) 
    return (
        <>
            <h2>Simple Counter</h2>
            <CountGenerator count={count} setCounter={setCount} />
            <ShowCount currentCount = {count}/>
        </>
    )
};

const CountGenerator = ({count,setCounter}) => {
    return (
        <>
            <button onClick={()=>{setCounter(count+1)}}>Plus</button>
            <button onClick={()=>{setCounter(count-1)}}>Minus</button>
        </>
    )
};

const ShowCount = (props) => {
    return (
        <>
            <h3>Count : {props.currentCount}</h3>
        </>
    )
};