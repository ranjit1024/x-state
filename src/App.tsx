import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APITester } from "./APITester";
import "./index.css";
import { Textarea } from "./components/ui/textarea";
import  {useActorRef, useSelector} from "@xstate/react";
import { countLogic } from "./state";
import { Button } from "./components/ui/button";
export function App() {
  const  counterRef = useActorRef(countLogic)
  const count = useSelector(counterRef, (state)=> state.context.count)
  
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
 
      <div className=" bg-gray-100 shadow rounded-xl px-8  py-4">
        <CardHeader className="text-xl">Hello</CardHeader>
        
        <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, possimus.</CardDescription>
      </div>
      <div className="flex gap-2 mt-2">
      <Button onClick={()=> counterRef.send({'type':'inc'})}>Incrment</Button>
      <Button onClick={()=> counterRef.send({'type':'dec'})}> Decrement </Button>
      </div>
      <h2 className="text-3xl font-medium mt-3">Count: {count}</h2>
    </div>
  );
}

export default App;
