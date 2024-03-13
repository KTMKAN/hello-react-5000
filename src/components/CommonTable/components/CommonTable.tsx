interface JsonObject {
    [P: string]: JsonObject | string
}

interface ICommonTableUIProps {
    items: Array<JsonObject>
}

function CommonTable(props: ICommonTableUIProps) {
    let items = props.items;

    return (
        <div className="common-table-wrap">
            <table>
                <tbody>
                    {
                        items.map((item: JsonObject, idx: number) => {
                            let keys = Object.keys(item);

                            return (
                                <tr key={idx}>
                                    {
                                        keys.map((key: string, idx: number) => {
                                            return <td key={idx}>{`${key}: ${item[key]}`}</td>
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CommonTable;

export type {
    ICommonTableUIProps
}