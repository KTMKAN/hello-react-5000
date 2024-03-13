import axios, { AxiosError, AxiosResponse } from "axios";

const apiUser = {
    getUsers: (id: any) => {
        console.log(`/api2/user`);

        return axios.get(`/api2/user`);
    },
}

export default apiUser;