interface Props {
    data: string;
    value: string | number;
}

function Data({
    data,
    value
}: Props) {
    return (
        <div>
            <p>{data.toUpperCase()}</p>
            <p>{value}</p>
        </div>
    )
}

export default Data;
