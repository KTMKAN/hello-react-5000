import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

interface PersonState {
    name: string,
    age: number,
    setName: (name: string) => void,
    setAge: (name: number) => void
}

const useStorePerson = create<PersonState>()(
    devtools(   // Redux devtools 이용시
      persist(  // 새로고침, 화면이동에도 유지하고 싶을 경우
        (set) => ({
            name: "아무개",
            age: 20,
            setName: (name) => set((state) => ({
                ...state,
                name: name,
            })),
            setAge: (age) => set((state) => ({
                ...state,
                age: age,
            }))
        }),
        {
          name: 'person-storage', // persist key
        }
      )
    )
);

export default useStorePerson;