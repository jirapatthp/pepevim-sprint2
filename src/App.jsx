import { Button } from "@/components/ui/button"
import DashBoard from "./views/DashBoard";
function App() {

  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <Button variant="outline" className="bg-amber-100">Button</Button>
      <DashBoard />
    </>
  );
}

export default App;
