import Team from "./components/Team.jsx";
import History from "./components/History.jsx";

import "./css/mvp.css";
import {useState} from "react";

export default function App() {
    const [states, setStates] = useState({
        guestName: "N/A",
        hostName: "N/A",
        guestPoints: 0,
        hostPoints: 0,
        guestsTurn: true,
        history: ["Game started."]
    });

    function setProps(key, value){
        setStates({
            ...states,
            [key] : value
        });
    }

    function onAddPoints(team, newPoints){
        if(team === "guest"){
            setStates({
                ...states,
                guestPoints: newPoints,
                guestsTurn: false
            });
        }else{
            setStates({
                ...states,
                hostPoints: newPoints,
                guestsTurn: true
            });
        }
        states.history.push(team + " throws, new points: " + newPoints);
        if(newPoints >= 12){
            states.history.push(team + " wins");
        }
    }

    function onClearButton(){
        setStates({
            ...states,
            guestPoints: 0,
            hostPoints: 0,
            guestsTurn: true,
            history: ["Game started."]
        });
    }

    return (
        <div className={"container"}>
            <h1>Basketball</h1>
            <section>
                <aside>
                    <Team label={"Guest-Team"}
                          id={"guest"}
                          name={states.guestName}
                          setName={(team, val) => setProps(team + "Name", val)}
                          points={states.guestPoints}
                          setPoints={(team, val) => onAddPoints(team, val)}
                          active={states.guestsTurn}
                    />
                </aside>

                <aside>
                    <History
                    history={states.history}
                    onClear={onClearButton}
                    />
                </aside>

                <aside>
                    <Team label={"Home-Team"}
                          id={"host"}
                          name={states.hostName}
                          setName={(team, val) => setProps(team + "Name", val)}
                          points={states.hostPoints}
                          setPoints={(team, val) => onAddPoints(team, val)}
                          active={!states.guestsTurn}/>
                </aside>
            </section>
        </div>
    );
}