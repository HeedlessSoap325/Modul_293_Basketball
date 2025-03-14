import Button from "./Button.jsx";

import court from "../assets/court.png";

export default function History({history, onClear}){

    return(
        <div className={"history"}>
            <img src={court} width={400} alt={"Picture of a Basketball Court"}/>
            <label>History</label>
            <ul>{history.map((value, index) => <li key={index}>{value}</li>)}</ul>

            <Button value={"reset"} onClick={onClear} active={true}/>
        </div>
    );
}