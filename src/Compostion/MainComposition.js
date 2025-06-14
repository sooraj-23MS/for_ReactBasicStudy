import { CompAsPropsComposition } from "./CompAsPropsComposition"
import PropsChildrenComposition from "./PropsChildrenComposition"


export const MainComposition = () => {
    return (
        <>
            <PropsChildrenComposition/>
            <CompAsPropsComposition/>
        </>
    )
}