import { Outlet } from "react-router"
import { Footer } from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header"

export const RouterLayout = () => {
    return (
        <>
        <Header />
            <Outlet />
        <Footer />
        </>
    )
}