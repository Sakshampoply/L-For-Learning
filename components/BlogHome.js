import Link from "next/link"

export default function BlogHome() {
    return <>
        <div className="text-white px-4 py-8 mx-5">
            <div className="flex justify-start items-center py-6">
                <h1 className="text-4xl font-bold">LEARN & SHARE YOUR EXPERIENCES WITH BLOGS</h1>
            </div>
            <div className="bg-[#00AC47] rounded-2xl h-[400px]">
            </div>
            <div className="flex justify-center p-6">
                <Link href={"/blog"}>
                    <h1>READ MORE</h1>
                </Link>
            </div>
        </div>
    </>
}