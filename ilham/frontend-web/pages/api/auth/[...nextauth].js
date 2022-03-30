import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { URL_LOGIN_API } from "../../../utils/remote-data/api";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { username, password } = credentials;
        const response = await axios.post(URL_LOGIN_API, {
          username,
          password,
        });

        if (response) {
          // Any object returned will be saved in `user` property of the JWT
          console.log("Login berhasil ", response.data);
          return response.data;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          console.log("Login failed");
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login", // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // ? (used for check email message)
    // newUser: '/auth/new-user' // ? New users will be directed here on first sign in (leave the property out if not of interest)
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.data.user.id;
        token.username = user.data.user.username;
        token.userRole = user.data.user.role;
        token.accessToken = user.data.user.accessToken;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = token;
        session.accessToken = token.accessToken;
      }
      console.log("ini session", session);
      console.log("kalau ini token", token);
      return session;
    },
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
});
