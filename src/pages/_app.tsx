import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";
import { Box, Theme } from "@radix-ui/themes";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme
        accentColor="blue"
        grayColor="mauve"
        radius="large"
        appearance={"dark"}
        panelBackground={"translucent"}
      >
        <NavigationBar />
        <Box minHeight={"90vh"}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Theme>
    </>
  );
}
