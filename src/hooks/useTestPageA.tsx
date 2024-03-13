import { useEffect, useState } from "react";

interface PropsUseTestPageA {
    count: number,
}

function useTestPageA(props: PropsUseTestPageA) {
    const [state, setState] = useState({
        count: props.count
    });

    let initTestPageA = () => {

    }

    let plusCount = () => {
        setState((state) => ({
            ...state,
            count: state.count++,
        }));
    }

    let minusCount = () => {
        setState((state) => ({
            ...state,
            count: state.count--,
        }));
    }

    useEffect(() => {
        console.log("mounted");

        initTestPageA();
    }, []);

    useEffect(() => {
        console.log("mounted and updated state");

        console.log(state);
        
    }, [state]);

    return { state, plusCount, minusCount }
}

export default useTestPageA;

export type {
    PropsUseTestPageA
}