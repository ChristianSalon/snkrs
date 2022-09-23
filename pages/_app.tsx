import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SneakerProvider } from "../hooks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SneakerProvider>
      <Component {...pageProps} />
    </SneakerProvider>
  );
}

export default MyApp;
