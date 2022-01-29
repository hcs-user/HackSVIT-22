import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/lexend-deca/400.css";
import "@fontsource/lexend-deca/500.css";
import "@fontsource/lexend-deca/600.css";
import "@fontsource/lexend-deca/700.css";

import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import BackgroundAnimation from "@components/BackgroundAnimation";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ChakraProvider cssVarsRoot={undefined} resetCSS theme={theme}>
				<Box zIndex="100">
					<Component {...pageProps} />
				</Box>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
