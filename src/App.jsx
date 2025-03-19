import Team from "./components/Team.jsx";
import History from "./components/History.jsx";

import "./css/mvp.css";
import {useState} from "react";
import {AlertWin} from  "./components/Alert.jsx";

export default function App() {
    const [states, setStates] = useState({
        guestName: "guest",
        homeName: "home",
        guestPoints: 0,
        homePoints: 0,
        guestsTurn: true,
        history: ["Game started."],
        win: false,
        victoryhistory: []
    });

    function setProps(key, value){
        setStates({
            ...states,
            [key] : value
        });
    }

    function onAddPoints(team, newPoints){
        states.history.push(team + " throws, new points: " + newPoints);
        let w = false;
        if(newPoints >= 12){
            states.history.push(team + " wins");
            states.victoryhistory.push(team + " has won.");
            w = true;
            AlertWin(team);
        }
        if(team === "guest"){
            setStates({
                ...states,
                guestPoints: newPoints,
                guestsTurn: false,
                win: w
            });
        }else{
            setStates({
                ...states,
                homePoints: newPoints,
                guestsTurn: true,
                win: w
            });
        }
    }

    function onClearButton(){
        setStates({
            ...states,
            guestPoints: 0,
            homePoints: 0,
            guestsTurn: true,
            history: ["Game started."],
            win: false
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
                          active={states.guestsTurn && !states.win}
                    />
                </aside>

                <aside>
                    <History
                    history={states.history}
                    onClear={onClearButton}
                    victoryhistory={states.victoryhistory}
                    />
                </aside>

                <aside>
                    <Team label={"Home-Team"}
                          id={"home"}
                          name={states.homeName}
                          setName={(team, val) => setProps(team + "Name", val)}
                          points={states.homePoints}
                          setPoints={(team, val) => onAddPoints(team, val)}
                          active={!states.guestsTurn && !states.win}/>
                </aside>
            </section>
        </div>
    );
}