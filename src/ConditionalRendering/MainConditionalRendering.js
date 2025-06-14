import IfCondition from "./IfCondition";
import LogicalAND from "./LogicalAND";
import SwitchCase from "./SwitchCase";
import TerneryOperation from "./TerneryOpertator";

export default function MainConditionalRendering() {
    return (
        <>
            <IfCondition/>
            <TerneryOperation/>
            <LogicalAND/>
            <SwitchCase/>
        </>
    )
}