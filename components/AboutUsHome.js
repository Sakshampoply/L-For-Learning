import Link from "next/link"
import Image from "next/image"

export default function AboutUsHome() {
    return <>
        <div className="text-white px-4 py-8 mx-5">
            <div className="flex justify-center items-center py-6">
                <Image src={"/Barcode2.png"}
                    width={150}
                    height={100}
                    className="hidden sm:flex"
                />
                <h1 className="text-4xl font-bold">ABOUT L FOR LEARNING</h1>
                <Image src={"/Barcode2.png"}
                    width={150}
                    height={100}
                    className="hidden sm:flex"
                />
            </div>
            <div className="bg-[#5546FF] p-6 font-bold rounded-2xl">
                <p>
                    Welcome to L For Learning, where entertainment meets enlightenment!
                </p>
                <br></br>
                <p>
                    At L For Learning, we believe that learning is a lifelong journey, and we're here to accompany you every step of the way. Our podcast is a vibrant intersection of entertainment, mental health, technology, lifestyles, and everything in between.
                </p>
                <br></br>
                <p>
                    Our mission is simple: to inspire, inform, and ignite curiosity in our listeners. We understand that life is a multifaceted experience, and we embrace the diversity of topics that shape our world. Whether you're seeking thought-provoking discussions on mental health, insightful explorations of the latest in technology, or light-hearted conversations about lifestyle trends, L For Learning is your go-to destination.
                </p>
                <br></br>
                <p>
                    Our hosts are passionate about creating meaningful connections with our audience. With a blend of expertise, humor, and authenticity, they dive deep into the issues that matter most. From interviews with industry leaders to personal anecdotes, each episode is crafted to engage, entertain, and empower.
                </p>
                <br></br>
                <p>
                    Join us as we navigate the ever-changing landscape of modern living. Whether you're tuning in during your commute, unwinding at home, or seeking inspiration on the go, L For Learning is here to spark your curiosity and feed your hunger for knowledge.
                </p>           </div>
            <div className="flex justify-center p-6">
                <Link href={"/aboutus"}>
                    <h1>LEARN MORE</h1>
                </Link>
            </div>
        </div>
    </>
}