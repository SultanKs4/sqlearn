import "../styles/globals.css";
import "antd/dist/antd.css";
import { JadwalProvider } from "../utils/context/JadwalContext";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // TODO : Set Session disini

  // Use of the <SessionProvider> is mandatory to allow components that call
  // `useSession()` anywhere in your application to access the `session` object.
  return (
    <SessionProvider session={session}>
      <JadwalProvider>
        <Component {...pageProps} />
      </JadwalProvider>
    </SessionProvider>
  );
}

export default MyApp;
