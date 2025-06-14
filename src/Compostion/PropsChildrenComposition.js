function Card({children}) {
    return (
        <div style={{border:"5px solid red",margin:"10px"}}>
            {children}
        </div>
    )
}

export default function PropsChildrenComposition () {
    // props.children
    return (
        <>
            <Card>
                <h3>Alvin</h3>
                <h4>MBA Student</h4>
            </Card>
            <Card>
                <h3>Ebin</h3>
                <h4>CA Student</h4>
            </Card>
        </>
    )
}