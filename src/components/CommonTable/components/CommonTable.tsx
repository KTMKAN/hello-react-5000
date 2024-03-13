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
                        items.map((item: JsonObject) => {
                            let keys = Object.keys(item);

                            return (
                                <tr>
                                    {
                                        keys.map((key: string, idx: number) => {
                                            if (typeof item[key] == "string" || typeof item[key] == "number") {
                                                return <td key={idx}>{`${key}: ${item[key]}`}</td>
                                            }
                                            return <td></td>;
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