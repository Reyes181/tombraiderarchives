"use client"

import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
    return (
        <div className="hidden md:block w-full z-10">
            <div className="py-4">
                <Container>
                    <div className="
                        md:flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        hidden
                        md:gap-0
                    ">
                        <Logo/>
                        <Menu/>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar;