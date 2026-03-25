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
    const result = await new Promise<string>((res)=> setTimeout(() => {
        res("done")
        
    }, 2000))
    return result;
})