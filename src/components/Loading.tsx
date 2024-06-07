import magikarp from "../assets/magikarp.svg";
import "./loading.scss";

function Loading() {
    return (
        <div className="loading">
            <div>
                <img src={magikarp} alt="magikarp" />
                <p>Loading...</p>
            </div>
        </div>
    )
}

export default Loading;
