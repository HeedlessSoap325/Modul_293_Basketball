import Button from "./Button.jsx";

import court from "../assets/court.png";
import VictoryHistory from "./VictoryHistory.jsx";

export default function History({history, onClear, victoryhistory}){

    return(
        <div className={"history"}>
            <img src={court} width={400} alt={"Picture of a Basketball Court"}/>
            <label>Game History</label>
            <ul>{history.map((value, index) => <li key={index}>{value}</li>)}</ul>

            <Button value={"reset"} onClick={onClear} active={true}/>

            <VictoryHistory history={victoryhistory}/>
        </div>
    );
}