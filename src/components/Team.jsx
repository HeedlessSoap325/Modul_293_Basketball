import Button from "./Button.jsx";

export default function Team({label, name, setName, points, setPoints, active, id}){
    function onClickButton(){
        const value = Math.floor(Math.random() * 3) + 1;
        setPoints(id, points + value);
    }

    return(
        <div className={"team"} id={id}>
            <label>{label}</label>
            <input
                type={"text"}
                value={name}
                onChange={(e) => setName(id, e.target.value)}
            />

            <label>Points</label>
            <input
                type={"text"}
                value={points}
                disabled={true}
            />

            <Button value={"Throw"} onClick={onClickButton} active={active}/>
        </div>
    );
}