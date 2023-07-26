import Image from "next/image"
import Link from "next/link"
import { Input } from "postcss"

export default function Footer() {
    return <>
        <div className="flex bg-[#E1DDD3] rounded-lg m-2 p-6 font-bold">
            <div className="grid sm:grid-cols-5 grid-cols-1 py-6">
                <div className="flex items-center h-full">
                    <Link href={"/"}>
                        <Image
                            src="/Logo.webp"
                            alt="Logo"
                            className="p-6 mx-8"
                            width={150}
                            height={185}
                            priority
                        />
                    </Link>
                </div>
                <div className="p-6 sm:p-0">
                    <ul>
                        <Link href={"/aboutus"}>
                            <li className="p-6">
                                ABOUT US
                            </li>
                        </Link>
                        <Link href={"/podcast"}>
                            <li className="p-6">
                                EPISODES
                            </li>
                        </Link>
                        <Link href={"/"}>
                            <li className="p-6">
                                CONTACT US
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="p-6 sm:p-0">
                    <p>
                        Join our weekly newsletter and
                        stay up to date with all our features
                    </p>
                    <input type="text" placeholder="EMAIL" className="bg-inherit border-b-2 border-black w-11/12 mt-60 py-2"></input>
                    <button type="submit">#</button>
                </div>
                <div className="p-6 sm:p-0">
                    <div className="flex justify-center">
                        <Link href={"/"}>
                            <Image
                                src="/SpotifyFooter.webp"
                                alt="Spotify Podcast"
                                className="p-4 mx-8"
                                width={160}
                                height={185}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <Link href={"/"}>
                            <Image
                                src="/AppleFooter.webp"
                                alt="Apple Podacast"
                                className="p-4 mx-8"
                                width={160}
                                height={185}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <Link href={"/"}>
                            <Image
                                src="/SoundCloudFooter.webp"
                                alt="Sound Cloud Podcast"
                                className="p-4 mx-8"
                                width={112}
                                height={185}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <Link href={"/"}>
                            <Image
                                src="/GoogleFooter.webp"
                                alt="Google Podcast"
                                className="p-4 mx-8"
                                width={138}
                                height={185}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <Link href={"/"}>
                            <Image
                                src="/castosFooter.webp"
                                alt="Castos Podcast"
                                className="p-4 mx-8"
                                width={120}
                                height={185}
                                priority
                            />
                        </Link>
                    </div>
                </div>
                <div className="p-6 sm:p-0">
                    <ul>
                        <Link href={"/"}>
                            <li className="p-6">
                                +INSTA
                            </li>
                        </Link>
                        <Link href={"/"}>
                            <li className="p-6">
                                +TWITTER
                            </li>
                        </Link>
                        <Link href={"/"}>
                            <li className="p-6">
                                +FACEBOOK
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </>
}