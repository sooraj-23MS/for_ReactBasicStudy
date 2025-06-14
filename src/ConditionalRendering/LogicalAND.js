export default function LogicalAND() {
    return (
        <>
            {/* <LogicalIndicator isLoading={true}/> */}
            <LogicalIndicator isLoading={false}/>
        </>
    )
}

const LogicalIndicator = ({isLoading}) => {
    return <div>{ isLoading && <p>...Loading</p>}</div>
}