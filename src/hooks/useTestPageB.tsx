import { useEffect, useState } from "react";
import useStorePerson from "@/src/stores/person";
import useStoreBear from "@/src/stores/bear";

interface PropsUseTestPageB {
    
}

function useTestPageB(props: PropsUseTestPageB) {
    const name = useStorePerson((state) => state.name);
    const age = useStorePerson((state) => state.age);
    const setAge = useStorePerson((state) => state.setAge);
    const setName = useStorePerson((state) => state.setName);

    const bears = useStoreBear((state) => state.bears);
    const upBear = useStoreBear((state) => state.increase);

    
    let handleChangeName = (e: any) => {
        console.log(e);
        console.log(e.target.value);
        setName(e.target.value);
    }
    
    let handleChangeAge = (e: any) => {
        console.log(e);
        console.log(e.target.value);
        setAge(e.target.value);
    }

    let handleClickBtnIncrease = (e: any) => {
        console.log(e);
        upBear(10);
    }

    useEffect(() => {
        console.log("mounted");
    }, []);


    return { name, age, bears, handleChangeName, handleChangeAge, handleClickBtnIncrease }
}

export default useTestPageB;

export type {
    PropsUseTestPageB
}