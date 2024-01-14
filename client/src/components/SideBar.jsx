import { useState } from "react";

export function SideBar(props) {
    const [nav, setNav] = useState(false)

    const showNav = () => {
        setNav(!nav)
    }
    return (
        <header className="flex justify-between ">
            <div className="">
                {props.user ? (<h1 className="">Hola! {props.user}</h1>) : (<h1>Bienvenido</h1>)}
            </div>
            {/*hamburguesa*/}
            <div>
                {nav ? (
                    // close button
                    <button className="fixed right-[30px] z-50 lg:hidden" onClick={showNav}>
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F" />
                        </svg>
                    </button>
                ) : (
                    <button className=" lg:hidden" onClick={showNav}>

                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                            <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                            <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                )}
                <nav
                    className={`h-[100vh] fixed top-[0px] flex flex-col justify-around items-center w-full md:hidden bg-white z-40 duration-1000 ${nav ? "right-[0px]" : "right-[-100vw]"
                        } `}
                >
                    <a href="#" className="underline">
                        Home
                    </a>
                    <a href="#" className="underline">
                        About
                    </a>
                    <a href="#" className="underline">
                        Contact
                    </a>
                    <a href="#" className="underline">
                        Address
                    </a>
                    <a href="#" className="underline">
                        Policy
                    </a>
                </nav>
            </div>

            <main>{props.children}</main>
        </header>
    )
}