import useTestPageB from "@/src/hooks/useTestPageB";

function TestPageB() {
    const { name, age, bears, handleChangeName, handleChangeAge, handleClickBtnIncrease } = useTestPageB({});

    return (
        <div className="testpage-b-container">
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
    );
}

export default TestPageB;