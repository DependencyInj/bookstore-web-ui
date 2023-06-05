import Navbar from "./Navbar"

export default function Layout ({ children }){
    return (
        <>
            <Navbar />
            <div>This is layout</div>
            <main>{children}</main>
        </>
    )
}