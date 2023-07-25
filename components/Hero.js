import Image from "next/image"
import Navbar from "./Navbar"

export default function Hero() {
    return <>
        <div className="bg-[#E1DDD3] h-screen rounded-lg m-2">
            <Navbar />
            <div className="bg-black text-white text-xs sm:text-4xl font-black rounded-xl p-1 sm:p-3 m-4 w-fit">
                TAKING THE Ls OF LIFE & LEARNING FROM THEM
            </div>
            <div className="flex justify-center items-center text-7xl sm:text-[160px] font-black leading-none">
                <Image
                    src="/Logo.webp"
                    alt="Logo"
                    className="p-4 mx-2 sm:mx-8"
                    width={150}
                    height={185}
                    priority
                />
                FOR
            </div>
            <div className="text-7xl sm:text-[160px] font-black px-2 sm:px-8 leading-none">
                LEARNING
            </div>
            <div className="flex">
                <div>
                    <Image
                        src="/SoundCloud.webp"
                        alt="SoundCloud Podcast"
                        className=""
                        width={260}
                        height={155}
                        priority
                    />
                </div>
                <div>
                    <Image
                        src="/Google.webp"
                        alt="Google Podcast"
                        className=""
                        width={225}
                        height={185}
                        priority
                    />
                </div>
                <div>
                    <Image
                        src="/castos.webp"
                        alt="Castos Podcast"
                        className=""
                        width={240}
                        height={185}
                        priority
                    />
                </div>
                <div>
                    <Image
                        src="/Spotify.webp"
                        alt="Spotify Podcast"
                        className=""
                        width={225}
                        height={550}
                        priority
                    />
                </div>
                <div>
                    <Image
                        src="/Apple.webp"
                        alt="Apple Podcast"
                        className=""
                        width={275}
                        height={550}
                        priority
                    />
                </div>
                <div>
                    <Image
                        src="/Smiley.webp"
                        alt="Smiely Design-Element"
                        className=""
                        width={550}
                        height={550}
                        priority
                    />
                </div>
            </div>
        </div>
    </>
}