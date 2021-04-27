import {Component} from "react";

class Clock extends Component {
    state = {
        timeNow: 0
    }

    clockId = 0;

    componentDidMount(){
        this.clockId = setInterval(()=>{
            this.clockTick();
        }, 1000);
    }

    componentWillUnmount(){
        console.log("After unmount");
        clearInterval(this.clockId);
    }

    clockTick = ()=>{
        this.setState(({timeNow}) => {
            return {
                timeNow: timeNow + 1
            }
        })
    }

    render(){
        const {timeNow} = this.state;

        return <div>{timeNow}</div>
    }
}

export default Clock;