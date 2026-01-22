import { Outlet } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";

function App() {
  return (
<<<<<<< HEAD
    <CartProvider>
      <div className="h-screen">
        <Outlet />
      </div>
    </CartProvider>
=======
    <>
      {/* <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <Button variant="outline" className="bg-amber-100">Button</Button> */}
      <DashBoard />
    </>
>>>>>>> develop
  );
}

export default App;
