import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) =>
        token?.role === "admin" ||
        token?.role === "mahasiswa" ||
        token?.role === "dosen",
    },
  }
);

export const config = { matcher: ["/admin", "/mahasiswa", "/dosen"] };
