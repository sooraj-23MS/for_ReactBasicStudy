import { use, useEffect, useState } from "react"

const LCCounterInFn = () => {
    
    const [count,setCount] = useState(0);

    useEffect (()=>{
        console.log("componentDidMount");
    },[])

    useEffect (()=>{
        console.log("componentDidUpdate");
    },[count])

    useEffect (()=>{
        return (()=>{
            console.log("componentWillUnmount");
        })
    })

    return (
        <>
            <p>Count : {count}</p>
            <button onClick={()=>{setCount(count + 1)}}>Plus</button>
            <button onClick={()=>{setCount(count - 1)}}>Minus</button>
        </>
    )

}

export const FnComponentLC = () => {
    const [isShow,setIsShow] = useState(false)
    return (
        <>
        <p>Component LifeCycle In Functional Component</p>
        { isShow ? ( <LCCounterInFn/> ) :( null )}
        <button onClick={()=>{setIsShow(!isShow)}}>{ isShow ? "Hide Component" : "Show Component"}</button>
        </>
    )
}