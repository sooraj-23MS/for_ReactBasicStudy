import { useState } from "react"

export default function State() {
    const [isActive,setIsActive] = useState(false)
    console.log(isActive);
    return (
        <>
            <h4>Active : {isActive.toString()}</h4>
            <button onClick={()=>{setIsActive(!isActive)}}>Change State</button>
        </>
    )
}