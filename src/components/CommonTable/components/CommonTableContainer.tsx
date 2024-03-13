import useCommonTable, { ICommonTableProps } from "../hooks/useCommonTable"
import CommonTable from "./CommonTable"

function CommonTableContainer(props: ICommonTableProps) {
    const {
        items
    } = useCommonTable(props);

    return (
        <CommonTable items={items}></CommonTable>
    )
}

export default CommonTableContainer;

export type {
    ICommonTableProps
}