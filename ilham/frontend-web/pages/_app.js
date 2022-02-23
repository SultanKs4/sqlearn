import "../styles/globals.css";
import "antd/dist/antd.css";
import { JadwalProvider } from "../utils/context/JadwalContext";

function MyApp({ Component, pageProps }) {
  return (
    <JadwalProvider>
      <Component {...pageProps} />;
    </JadwalProvider>
  );
}

export default MyApp;
