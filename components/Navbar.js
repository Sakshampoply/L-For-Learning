import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return <>
        <nav className="flex justify-between items-center mx-6">
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
            <div>
                <Image />
                <button className="border-2 border-solid border-black rounded-full p-1 mx-2">
                    LOGIN IN
                </button>
            </div>
        </nav>
    </>
}