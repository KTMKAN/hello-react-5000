
const queryKeys = {
    member: {
        all: ['members'] as const,
        // lists: () => [...queryKeys.member.all, 'list'] as const,
        // list: (filters: string) => [...queryKeys.member.lists(), { filters }] as const,
        // details: () => [...queryKeys.member.all, 'detail'] as const,
        // detail: (id: number) => [...queryKeys.member.details(), id] as const,
        // insert: ['insertMember'] as const,
    },
    user: {
        all: ['users'] as const,
    }
}

export default queryKeys;