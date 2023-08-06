import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: "100144636364-c0l7hnd2mru3q5h8f4397hfphuera4j9.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],
    secret: "ebae1bdd6c70162631943779bd929e55"
}

export default NextAuth(authOptions)