import { withAuth } from "next-auth/middleware";

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      console.log("ini token di middleware, ", token);
      return token?.userRole === "dosen";
    },
  },
});
