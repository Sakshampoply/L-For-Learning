import Link from "next/link"

export default function AboutUsHome() {
    return <>
        <div className="text-white px-4 py-8 mx-5">
            <div className="flex justify-center items-center py-6">
                <h1 className="text-4xl font-bold">ABOUT L FOR LEARNING</h1>
            </div>
            <div className="bg-[#5546FF] rounded-2xl h-[400px]">
            </div>
            <div className="flex justify-center p-6">
                <Link href={"/aboutus"}>
                    <h1>LEARN MORE</h1>
                </Link>
            </div>
        </div>
    </>
}