import HeaderNav from "./HeaderNav"
import Footer from "./Footer"

function Layout({children}) {
    return (
    <div className="flex flex-col">
        <HeaderNav/>
        {children}
        <Footer/>
    </div>
    )
}

export default Layout

