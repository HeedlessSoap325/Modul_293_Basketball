import {use, useEffect, useState} from "react";

import "../css/ProgressBar.css";

export default function ProgressBar({points}){
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        let width = Math.floor((points/12) * 100);
        setProgress(width);
    }, [points]);

    return(
        <>
            <div className={"progress-container"}>
                <div className={"progress-bar"} style={{
                    width: `${progress}%`,
                    transition: "width 0.5s ease-in-out"
                }}>
                    <div className={"progress-points"}>{points <= 0 ? "" : points}</div>
                </div>
            </div>
        </>
    );
}