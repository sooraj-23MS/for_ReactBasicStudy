function Layout({header,content,footer}) {
    return (
        <div style={{border:"2px solid black"
                    ,margin:"10px"
                    ,padding:"5px"
                    ,display:"flex"
                    ,flexDirection:"column"
                    ,justifyContent:"center"}}>
            <header style={{border:"2px solid green",margin:"2px",padding:"5px"}}>{header}</header>
            <main style={{border:"2px solid red",margin:"2px",padding:"5px"}}>{content}</main>
            <footer style={{border:"2px solid orange",margin:"2px",padding:"5px"}}>{footer}</footer>
        </div>
    )
}

export function CompAsPropsComposition() {
    return (
        <>
            <Layout header={<div>
                                <h3>Alwin</h3>
                            </div>} 
                    content={<div>
                                <p>Working As A Frontend Developer</p>
                                <h4>TCS</h4>
                            </div>}
                    footer={<div>
                                <p>Working</p>
                            </div>}/>
            <Layout header={<div>
                                <h3>Abin</h3>
                            </div>} 
                    content={<div>
                                <p>Working As A Backend Developer</p>
                                <h4>UST Global</h4>
                            </div>}
                    footer={<div>
                                <p>Not Working</p>
                            </div>}/>
        </>
    )
}