import { fromPromise, fromTransition } from "xstate";

export const countLogic = fromTransition((state:any, event)=>{
    if(event.type === "inc"){
        return {  count : state.count + 1}
    }
    if(event.type === 'dec'){
        return {count: state.count - 1}
    }
    return state;
}, {count:0});

export const promiseLogic = fromPromise(async()=>{
    const result:Promise<String>  = new Promise((res)=> setTimeout(() => {
        res;
        return "working"
    }, 1000))
    return result;
})