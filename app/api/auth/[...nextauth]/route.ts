import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '@/app/models/User'
import connect from '@/utils/db'
import bcrypt from 'bcryptjs'

interface Credentials {
    email: string
    password: string
}

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined, req: any) {
                /**
                 * Authorizes the user with the given credentials.
                 *
                 * @param {Record<"email" | "password", string> | undefined} credentials - The user's credentials, consisting of an email and password.
                 * @param {any} req - The request object.
                 * @return {Promise<any>} - Returns the authorized user if the credentials are valid, otherwise throws an error.
                */

                // Ensure credentials are present
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }
        
                await connect();
        
                try {
                    const user = await User.findOne({ email: credentials.email })
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong password");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (err: any) {
                    throw new Error(err);
                }
            }
        }) 
    ],
    pages:{
        error: '/dashboard/login',
    }
})

export { handler as GET, handler as POST }