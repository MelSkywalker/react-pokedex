import "./data.scss";

interface Props {
    data: string;
    value: string | number;
    imgSrc: string;
}

function Data({
    data,
    value,
    imgSrc
}: Props) {
    return (
        <div className="data">
            <span className="data-title">
                <img src={imgSrc} alt={data} />
                <p className="data-text">{data.toUpperCase()}</p>
            </span>
            <div className="value">
                <p>{value}</p>
            </div>
        </div>
    )
}

export default Data;
