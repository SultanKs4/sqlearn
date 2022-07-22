import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (
      !req.nextUrl.pathname.includes(req.nextauth.token.userRole) ||
      req.nextauth.token === null
    ) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    // Page Admin
    "/admin",
    "/admin/edit-profile",
    "/admin/konfigurasi-penilaian",

    // Page Mahasiswa
    "/mahasiswa",
    "/mahasiswa/soal",
    "/mahasiswa/edit-profile",
    // Page Dosen
    "/dosen",
    "/dosen/kelas",
    "/dosen/soal",
    "/dosen/paket-soal",
    "/dosen/nilai-mahasiswa",
    "/dosen/studi-kasus",
    "/dosen/edit-profile",
  ],
};
