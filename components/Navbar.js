import Image from "next/image"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"

export default function Navbar() {
    return <>
        <nav className="sm:flex justify-between items-center bg-[#E1DDD3] rounded-lg px-6 m-2 hidden">
            <Link href={"/"}>
                <Image
                    src="/Logo.webp"
                    alt="Logo"
                    className="p-4"
                    width={80}
                    height={24}
                    priority
                />
            </Link>
            <div>
                <Link href={"/aboutus"}>
                    <button className="border-2 border-solid border-black rounded-full p-1 mx-2">
                        ABOUT US
                    </button>
                </Link>
                <Link href={"/podcast"}>
                    <button className="border-2 border-solid border-black rounded-full p-1 mx-2">
                        PODCAST
                    </button>
                </Link>
                <Link href={"/blog"}>
                    <button className="border-2 border-solid border-black rounded-full p-1 mx-2">
                        BLOG
                    </button>
                </Link>
            </div>
            <div className="flex">
                <div className="flex">
                    <Image
                        src={"/Barcode.png"}
                        width={150}
                        height={100}
                    />
                </div>
                <div>
                    <Link href={"/profile"}>
                        <button onClick={signIn} className="border-2 border-solid border-black rounded-full p-1 mx-2">
                            LOGIN IN
                        </button>
                    </Link>
                </div>
            </div >
        </nav >

        <nav className="sm:hidden bg-[#E1DDD3] rounded-lg">
            <div className="flex justify-between">
                <Link href={"/"}>
                    <Image
                        src="/Logo.webp"
                        alt="Logo"
                        className="p-4"
                        width={80}
                        height={24}
                        priority
                    />
                </Link>
                <div className="p-6">
                    <h1>\/</h1>
                </div>
            </div>
        </nav>
    </>
}