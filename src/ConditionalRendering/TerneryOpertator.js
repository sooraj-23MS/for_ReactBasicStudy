import { useState } from "react";

export default function TerneryOperation() {
    const [isActive,setIsActive] = useState(false);
    return (
        <div>{
            isActive ? (
                <div className="box" style={{width:"200px",height:"200px",backgroundColor:"yellow", margin:"10px",color:"blue"}}>True</div>
            ) : (
                <div className="box"  style={{width:"200px",height:"200px",backgroundColor:"blue",margin:"10px",color:"yellow"}}>false</div>
            )
        }
        <button onClick={()=>{setIsActive(!isActive)}}>Change Colour</button>
        </div>
    )
}