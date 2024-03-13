import useTestPageA from "@/src/hooks/useTestPageA";
import useTestPageB from "@/src/hooks/useTestPageB";

import useMember from "@/src/queries/member/useMember";
import useUser from "@/src/queries/user/useUser";

function TestPageA() {
    const { state, plusCount, minusCount } = useTestPageA({count: 5});
    const { name, age, bears, handleChangeName, handleChangeAge, handleClickBtnIncrease } = useTestPageB({});

    const { useGetMember } = useMember();
    
    const getMember = useGetMember({
        storeCode: [],
        options: {
            onError: () => { },
            onSuccess: () => { }
        }
    });
    
    const { useGetUser } = useUser();
    
    const getUser = useGetUser({
        storeCode: [],
        options: {
            onError: () => { },
            onSuccess: () => { }
        }
    });
    
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
                <br/>
                <br/>
                
                <div className="example-react-query-member">
                    {
                        getMember.isLoading ? <div>...isLoading</div>
                        : getMember.isError ? <div>!! isError !!</div>
                        : <div>{getMember.data.length}</div>
                    }
                </div>
                <br/>
                <br/>

                <div className="example-react-query-user">
                    {
                        getUser.isLoading ? <div>...isLoading</div>
                        : getUser.isError ? <div>!! isError !!</div>
                        : <div>{getUser.data.length}</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default TestPageA;