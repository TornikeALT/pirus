import { Outlet } from "react-router-dom";
import Navigation from '../components/Navigation'
import Footer from "../components/Footer";



function RootLayout() {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>)

}

export default RootLayout;