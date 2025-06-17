import React, { useState } from "react";

// Class Component LifeCycle.
class LCCounterInCls extends React.Component {
    constructor(props){
        super(props);
        this.state = { count : 0 };
        console.log("Constructor");
    }

    componentDidMount () {
        console.log("componentDidMount");
    }

    shouldComponentUpdate () { 
        if (this.state.count % 2 == 0)
        {
            console.log(this.state.count);
            console.log("shouldComponentUpdate");
            return true;
        }
        return false;
    }

    componentDidUpdate () {
        console.log(this.state.count);
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
  }

  render () {
    return (
        <>
            <p>Count : {this.state.count}</p>
            <button onClick={()=>{this.setState({count : this.state.count + 1})}}>Plus</button>
            <button onClick={()=>{this.setState({count : this.state.count - 1})}}>Minus</button>
        </>
    )
  }
}

export default function ClsComponentLC () {
    const [isShow,setIsShow] = useState(false)
    return (
        <>
             <p>Component LifeCycle In Class Component</p>
            { isShow ? ( <LCCounterInCls/> ):( null )}
            <button onClick={()=>{setIsShow(!isShow)}}>{ isShow ? "Hide Component" : "Show Component"}</button>
        </>
    )
}