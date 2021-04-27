import {Component} from "react";

import Clock from "../Clock";

class Timer extends Component {
    state = {
        isClockVisible: false
    }

    toggleClock = ()=> {
        this.setState(({isClockVisible}) => {
            return {
                isClockVisible: !isClockVisible
            }
        })
    }

    render(){
        const {isClockVisible} = this.state;
        const {toggleClock} = this;

        return (
            <div>
                {isClockVisible && <Clock />}
                <button onClick={toggleClock}>Показать таймер</button>
                <button onClick={toggleClock}>Скрыть таймер</button>
            </div>
           )
    }
}

export default Timer;