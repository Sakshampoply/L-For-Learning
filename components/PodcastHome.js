import Link from "next/link"

export default function PodcastHome() {
    return <>
        <div className="text-white px-4 py-8 mx-5">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">OUR LATEST EPISODES</h1>
                <Link href={"/podcast"}><h1>VIEW ALL</h1></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="my-6 sm:me-4">
                    <div className="bg-[#DE20E2] rounded-2xl p-4 h-[400px]"></div>
                    <h1 className="text-2xl font-bold p-2">EPISODE-1</h1>
                </div>
                <div className="my-6 sm:ms-4">
                    <div className="bg-[#DE20E2] rounded-2xl p-4 h-[400px]"></div>
                    <h1 className="text-2xl font-bold p-2">EPISODE-2</h1>
                </div>
            </div>
        </div>
    </>
}