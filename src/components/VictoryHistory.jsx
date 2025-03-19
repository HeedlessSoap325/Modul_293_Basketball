export default function VictoryHistory({history}){
    return (
        <div>
            <label>Victory History</label>
            <ul>{history.map((value, index) => <li key={index}>{value}</li>)}</ul>
        </div>
    );
}