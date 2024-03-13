import axios, { AxiosError, AxiosResponse } from "axios";

const apiMember = {
    getMembers: (id: any) => {
        console.log(`useSelectSelectorGridLayoutList: /api/members`);

        return axios.get(`/api/members`);
    },
}

export default apiMember;