import { useQuery, QueryKey, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import apiMember from '@/src/apis/member';

import queryKeys from "../querykeys";

interface IUseQueryOptionsType<T> extends UseQueryOptions<AxiosResponse<T>, AxiosError, T, QueryKey[]> { }
// interface IUseMutationOptionsType<T> extends UseMutationOptions<AxiosResponse<T>, AxiosError, T, QueryKey[]> { }

const useMember = () => {
    const useGetMember = ({
        storeCode,
        options,
    }: {
        storeCode: QueryKey; // query key에 넣어줄 배열값
        options?: IUseQueryOptionsType<any>; // useQuery의 options
    }) => {
        return useQuery([queryKeys.member.all, storeCode],
            ({ queryKey: [_, storeCode] }) => {
                return apiMember.getMembers(storeCode);
            },
            {
                select: data => data.data,
                ...options,
            });
    }

    return { useGetMember };
}

export default useMember;