import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "email",
          placeholder: "francois@mail.fr",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch("http://atd16-api.test/api/login_check", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks:{
    async jwt({ token, user }) {
      return {
        ...token,
        ...user
      }
    },
    async session({session, token, user} ) {
      session.user = token
      return session
    }
  },

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
