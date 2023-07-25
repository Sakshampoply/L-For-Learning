import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return <>
        <div className="flex bg-[#E1DDD3] rounded-lg m-2 p-6 font-bold">
            <div className="grid sm:grid-cols-5 grid-cols-1">
                <div>
                    <Link href={"/"}>
                        <Image
                            src="/Logo.webp"
                            alt="Logo"
                            className="p-4 mx-8"
                            width={150}
                            height={185}
                            priority
                        />
                    </Link>
                </div>
                <div>
                    <ul>
                        <li>
                            ABOUT US
                        </li>
                        <li>
                            EPISODES
                        </li>
                        <li>
                            CONTACT US
                        </li>
                    </ul>
                </div>
                <div>
                    <p>
                        Join our weekly newsletter and
                        stay up to date with all our features
                    </p>
                </div>
                <div></div>
                <div>
                    <ul>
                        <li>
                            +INSTA
                        </li>
                        <li>
                            +TWITTER
                        </li>
                        <li>
                            +FACEBOOK
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}