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
                <div id={"progress-bar"} className={"progress-bar"} style={{
                    width: `${progress}%`,
                    transition: "width 0.5s ease-in-out"
                }}>{points}</div>
            </div>
        </>
    );
}