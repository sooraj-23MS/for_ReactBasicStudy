export default function Props() {
    return (
        <>
            <Greet text={"Soorya"}/>
        </>
    )
}

const Greet = (props) => {
    return <h2>Welcome {props.text}</h2>
}