import useTestPageA from "@/src/hooks/useTestPageA";
import useTestPageB from "@/src/hooks/useTestPageB";

function TestPageA() {
    const { state, plusCount, minusCount } = useTestPageA({count: 5});
    const { name, age, bears, handleChangeName, handleChangeAge, handleClickBtnIncrease } = useTestPageB({});

    return (
        <div className="testpage-a-container">
            <div className="content">
                <input type="text" value={state.count} readOnly></input>
                <button className="btnPlusCount" onClick={plusCount}>+</button>
                <button className="btnMinusCount" onClick={minusCount}>-</button>
                <br/>
                <br/>

                <div className="example-react-zustand">
                    <label>name: </label>
                    <input onChange={handleChangeName} value={name}></input>
                    <br/>
                    <label>age: </label>
                    <input onChange={handleChangeAge} value={age}></input>
                    <br/>
                    <br/>
                    <label>bears: {bears}</label>
                    <button onClick={handleClickBtnIncrease}>increase</button>
                </div>
            </div>
        </div>
    );
}

export default TestPageA;