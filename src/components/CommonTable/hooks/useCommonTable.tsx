interface JsonObject {
    [P: string]: JsonObject
}

interface ICommonTableProps {
    items: Array<JsonObject>
}

function useCommonTable(props: ICommonTableProps) {
    let items = props.items;

    return {
        items
    }
}

export default useCommonTable;

export type {
    ICommonTableProps
}