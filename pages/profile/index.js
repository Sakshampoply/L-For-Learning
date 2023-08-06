import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Profile() {

    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session) router.push('/api/auth/signin')
    }, [router, session])

    return <>
        <Navbar />
        <Footer />
    </>
}