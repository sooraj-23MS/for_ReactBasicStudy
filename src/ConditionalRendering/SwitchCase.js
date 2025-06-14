
import { useState } from "react"

export default function SwitchCase() {
    const [status,setStatus] = useState(null);
    console.log(status);
     
    const Notification = ({status}) => {
        return (
            <>
                {(()=>{
                    switch (status) {
                        case 'info' : 
                            return <Info text={'Did you know? ...'}/>;
                        case 'warning' :
                            return <Warning text={'Be careful here ...'}/>;
                        case 'error' :
                            return <Error text={'Something went wrong ...'}/>;
                        default :
                            return null;
                            } 
                        })()}
            </>
            
            );
        };
                
    return (
        <>
            <h2>Switch Case</h2>
            <button onClick={()=>{setStatus("info")}}>Info</button>
            <button onClick={()=>{setStatus("warning")}}>Warning</button>
            <button onClick={()=>{setStatus("error")}}>Error</button>
           
                <Notification status={status}/>
            
        </>
       
    )
}

const Info = ({text}) => {
    return <h2 style={{color:"blue"}}>INFO : {text}</h2>
}
const Warning = ({text}) => {
    return <h2 style={{color:"orange"}}>WARINING : {text}</h2>
  
}
const Error = ({text}) => {
    return <h2 style={{color:"red"}}>ERROR : {text}</h2>
    
}