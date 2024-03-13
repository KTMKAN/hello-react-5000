import { useQuery, QueryKey, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import apiUser from '@/src/apis/user';

import queryKeys from "../querykeys";

interface IUseQueryOptionsType<T> extends UseQueryOptions<AxiosResponse<T>, AxiosError, T, QueryKey[]> { }
interface IUseMutationOptionsType<T> extends UseMutationOptions<AxiosResponse<T>, AxiosError, T, QueryKey[]> { }

const useUser = () => {
    const useGetUser = ({
        storeCode,
        options,
    }: {
        storeCode: QueryKey; // query key에 넣어줄 배열값
        options?: IUseQueryOptionsType<any>; // useQuery의 options
    }) => {
        return useQuery([queryKeys.user.all, storeCode],
            ({ queryKey: [_, storeCode] }) => {
                return apiUser.getUsers(storeCode);
            },
            {
                select: data => data.data,
                ...options,
            });
    }

    return { useGetUser };
}

export default useUser;