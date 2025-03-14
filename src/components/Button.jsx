export default function Button({value, onClick, active}){
    return(
        <input type={"button"} value={value} onClick={onClick} disabled={!active}/>
    );
}