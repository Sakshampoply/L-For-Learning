import Image from "next/image"
import Navbar from "./Navbar"

export default function Hero() {
    return <>
        <div className="static bg-[#E1DDD3] h-[730px] rounded-lg m-2 mb-14">
            <Navbar />
            <div className="bg-black text-white text-xs sm:text-4xl font-black rounded-xl p-1 sm:p-3 m-4 w-fit">
                TAKING THE Ls OF LIFE & LEARNING FROM THEM
            </div>
            <div className="flex justify-center items-center text-7xl sm:text-[160px] font-black leading-none">
                <Image
                    src="/Logo.webp"
                    alt="Logo"
                    className="p-4 mx-2 sm:mx-8 w-[90px] sm:w-[150px]"
                    width={150}
                    height={185}
                    priority
                />
                FOR
            </div>
            <div className="text-6xl sm:text-[160px] font-black px-2 sm:px-8 leading-none">
                LEARNING
            </div>
            <div className="flex">
                <div className="absolute left-0 top-[500px]">
                    <Image
                        src="/SoundCloud.png"
                        alt="SoundCloud Podcast"
                        className=""
                        width={260}
                        height={155}
                        priority
                    />
                </div>
                <div className="absolute left-[320px] top-[500px]">
                    <Image
                        src="/Google.png"
                        alt="Google Podcast"
                        className=""
                        width={225}
                        height={185}
                        priority
                    />
                </div>
                <div className="absolute left-[610px] top-[500px]">
                    <Image
                        src="/Castos.png"
                        alt="Castos Podcast"
                        className=""
                        width={240}
                        height={185}
                        priority
                    />
                </div>
                <div className="absolute left-[142px] top-[620px]">
                    <Image
                        src="/Spotify.png"
                        alt="Spotify Podcast"
                        className=""
                        width={225}
                        height={550}
                        priority
                    />
                </div>
                <div className="absolute left-[440px] top-[610px]">
                    <Image
                        src="/Apple.png"
                        alt="Apple Podcast"
                        className=""
                        width={200}
                        height={550}
                        priority
                    />
                </div>
                <div className="absolute right-12 top-[250px]">
                    <Image
                        src="/Smiley.png"
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