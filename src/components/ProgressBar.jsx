import {use, useEffect, useState} from "react";

import "../css/ProgressBar.css";

export default function ProgressBar({points}){
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        if(points >= 12){
            setProgress(100);
        }else {
            setProgress(Math.floor((points / 12) * 100));
        }
    }, [points]);

    return(
        <div className={"progress-container"}>
            <div className={"progress-bar"} style={{
                width: `${progress}%`,
            }}>
                <div className={"progress-points"}>{points <= 0 ? "" : points}</div>
            </div>
        </div>
    );
}