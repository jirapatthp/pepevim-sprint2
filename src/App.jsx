import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import HomeView from "./views/HomeView";
import PaymentView from "./views/PaymentView";
function App() {
  return (
    <>
      <Navbar className="w-full" />
      {/* <HomeView /> */}
      <PaymentView/>
    </>
  );
}

export default App;
