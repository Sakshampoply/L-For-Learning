import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";

export default function Navbar() {
    const { data: session } = useSession();

    let [isOpen, setisOpen] = useState(false);

    return <>
        <nav className="md:flex justify-between items-center bg-[#E1DDD3] rounded-lg md:px-6 m-2 ">
            <Link href={"/"}>
                <Image
                    src="/Logo.png"
                    alt="Logo"
                    className="p-4"
                    width={80}
                    height={24}
                    priority
                />
            </Link>

            <div onClick={() => setisOpen(!isOpen)} className="absolute right-8 top-8 cursor-pointer md:hidden">
                {
                    isOpen ? <button><FaTimes /></button> : <button><FaBars /></button>
                }
            </div>

            <div className={`md:flex md:static absolute bg-[#E1DDD3] w-11/12 md:w-auto ${isOpen ? "top-24" : "top-[-490px]"}`}>
                <Link href={"/aboutus"}>
                    <button className="block border-2 border-solid border-black rounded-full p-1 mx-2 my-4 md:my-0">
                        ABOUT US
                    </button>
                </Link>
                <Link href={"/podcast"}>
                    <button className="block border-2 border-solid border-black rounded-full p-1 mx-2 my-4 md:my-0">
                        PODCAST
                    </button>
                </Link>
                <Link href={"/blog"}>
                    <button className="block border-2 border-solid border-black rounded-full p-1 mx-2 my-4 md:my-0">
                        BLOG
                    </button>
                </Link>
            </div>
            <div className={`block md:flex md:static absolute bg-[#E1DDD3] w-11/12 md:w-auto ${isOpen ? "top-[260px]" : "top-[-490px]"}`}>
                <div className="flex my-2 md:my-0 mx-2 md:mx-0">
                    <Image
                        src={"/Barcode.png"}
                        width={150}
                        height={100}
                    />
                </div>
                <div>
                    <Link href={"/profile"}>
                        <button onClick={signIn} className="block border-2 border-solid border-black rounded-full p-1 mx-2 my-4 md:my-0">
                            LOGIN IN
                        </button>
                    </Link>
                </div>
            </div >
        </nav >
    </>
}