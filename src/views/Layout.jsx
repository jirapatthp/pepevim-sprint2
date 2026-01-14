import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout(){
    const {pathname} = useLocation()

    const hideNavbarRoute = ["/login", "/register"]
    return (
        <div>
            {!hideNavbarRoute.includes(pathname) && <Navbar/>}
            <section>
                <Outlet/>
            </section>
        </div>
    )
}