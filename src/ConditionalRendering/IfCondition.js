export default function IfCondition() {
    return (
        <>
        <h2>All Item</h2>
            <ul>
                <ShowItem name="Soap"/>
                <ShowItem name="Brush"/>
                <ShowItem name="paste"/> 
            </ul>
        <h2>Packed Item</h2>
            <ul>
                <PackedItem name="Soap" isPacked={true}/>
                <PackedItem name="Brush" isPacked={false}/>
                <PackedItem name="paste" isPacked={true}/>
            </ul>
        </>
    )
};

const ShowItem = ({name}) => {
    return <li className="item">Item : {name}</li>
}

const PackedItem = ({name,isPacked}) => {
    if (isPacked) {
        return <li className="item">Item : {name} ✅ </li>
    }
    else {
        return <li className="item">Item : {name}  </li>
    }
    
}