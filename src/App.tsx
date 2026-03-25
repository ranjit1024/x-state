import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APITester } from "./APITester";
import "./index.css";
import { Textarea } from "./components/ui/textarea";
import  {useActorRef, useSelector} from "@xstate/react";
import { countLogic } from "./state";
import { Button } from "./components/ui/button";
import { promiseLogic } from "./state";
import FeedbackButton from "./components/ui/feedback";
import { createBrowserInspector } from "@statelyai/inspect";
export function App() {
  const promiseRef = useActorRef(promiseLogic);
  createBrowserInspector 
  const  counterRef = useActorRef(countLogic)
  const count = useSelector(counterRef, (state)=> state.context.count)
  const promiseData = useSelector(promiseRef, (state)=> state.output)
  return (
    <div className="container font-mono mx-auto p-8 text-center relative z-10">
 
      <div className=" bg-gray-100 shadow rounded-xl px-8  py-4">
        <CardHeader className="text-xl">Hello</CardHeader>
        
        <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, possimus.</CardDescription>
      </div>
      <div className="flex gap-2 mt-2">
      <Button onClick={()=> counterRef.send({'type':'inc'})}>Incrment</Button>
      <Button onClick={()=> counterRef.send({'type':'dec'})}> Decrement </Button>
      </div>
      <h2 className="text-3xl font-medium mt-3">Count: {count}</h2>
      <h2 className="text-3xl font-medium mt-3">Promise: {promiseData}</h2>
      <div className="mt-2">
      <FeedbackButton />
      </div>
    </div>
  );
}

export default App;
