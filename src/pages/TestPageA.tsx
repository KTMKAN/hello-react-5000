import useTestPageA from "@/src/hooks/useTestPageA";

function TestPageA() {
    const { state, plusCount, minusCount } = useTestPageA({count: 5});

    return (
        <div className="testpage-a-container">
            <div className="content">
                <input type="text" value={state.count} readOnly></input>
                <button className="btnPlusCount" onClick={plusCount}>+</button>
                <button className="btnMinusCount" onClick={minusCount}>-</button>
            </div>
        </div>
    );
}

export default TestPageA;