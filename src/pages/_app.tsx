import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/ubuntu-mono/400.css";
import "@fontsource/ubuntu-mono/700.css";

import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import BackgroundAnimation from "@components/BackgroundAnimation";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ChakraProvider resetCSS theme={theme}>
				<Box zIndex="100">
					<Component {...pageProps} />
				</Box>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
