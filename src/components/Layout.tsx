import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
	return (
		<Box scrollPadding='72'>
			<Navbar />
			<Box mt='20'>{children}</Box>
			<Footer />
		</Box>
	);
}

export default Layout;
