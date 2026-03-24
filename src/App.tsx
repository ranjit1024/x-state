import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APITester } from "./APITester";
import "./index.css";
import { Textarea } from "./components/ui/textarea";



export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
 
      <Card className="p-10">
        <CardHeader className="text-xl">lorem</CardHeader>
        <CardContent>This is Header</CardContent>
        <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, possimus.</CardDescription>
      </Card>
    </div>
  );
}

export default App;
