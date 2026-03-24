import {fromTransition} from "xstate"

export const countLogic = fromTransition((state, event)=> {
    console.log(state);
    if(event.type === "inc"){
        return {count: state.count +  1}
    }
    else if(event.type === "dec") {
        return {count: state.count - 1}
    }
    return state;
}, {count:0})