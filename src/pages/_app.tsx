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
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "../scss/shit-code.scss";
function MyApp({ Component, pageProps, router }: AppProps) {
	const cursor = useRef(null);

	const handleMouseMove = e => {
		cursor.current.style.top = `${e.clientY}px`;
		cursor.current.style.left = `${e.clientX}px`;
	};

	return (
		<>
			<ChakraProvider cssVarsRoot={undefined} resetCSS theme={theme}>
				<div style={{ minHeight: "100%", minWidth: "100%" }} onMouseMove={handleMouseMove}>
					<div className="cursor-style" ref={cursor} />
					<AnimatePresence>
						<motion.div
							key={router.route}
							initial="pageInitial"
							animate="pageAnimate"
							exit="pageInitial"
							transition={{ duration: 0.7 }}
							variants={{
								pageInitial: {
									opacity: 0,
									y: -50,
								},
								pageAnimate: {
									y: 0,
									opacity: 1,
								},
							}}
						>
							<Component {...pageProps} />
						</motion.div>
					</AnimatePresence>
				</div>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
