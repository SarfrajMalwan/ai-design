import Navbar from "@/component/navbar/navbar"


const Layout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            {children}
        </>
    )
}

export default Layout 