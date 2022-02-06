import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
	heading: "Lexend Deca",
	body: "Poppins",
};

const breakpoints = createBreakpoints({
	sm: "40rem",
	md: "52rem",
	lg: "64rem",
	xl: "80rem",
});

const colors = {
	black: "#001010",
	white: "#FAF8F5",
	red: {
		50: "#ffe5ef",
		100: "#ffb3cf",
		200: "#ff80af",
		300: "#ff4d8f",
		400: "#ff1a6f",
		500: "#e60055",
		600: "#b30042",
		700: "#80002f",
		800: "#4d001c",
		900: "#1a0009",
	},
	purple: {
		50: "#eee7fe",
		100: "#ccb6fc",
		200: "#aa85fa",
		300: "#8754f8",
		400: "#6523f6",
		500: "#4c09dc",
		600: "#3b07ab",
		700: "#2a057a",
		800: "#190349",
		900: "#080118",
	},
};

const theme = extendTheme({
	styles: {
		global: {
			"html, body": {
				height: "100%",
				backgroundColor: "purple.800",
				// background: "linear-gradient(to left, #23272a, #001010)",
				lineHeight: "1.6",
				color: "white",
			},
			"button:focus": {
				boxShadow: "none",
			},
		},
	},
	colors,
	fonts,
	breakpoints,
	config: {
		defaultColorMode: "dark",
	},
	components: {
		Heading: {
			baseStyle: {
				fontWeight: 500,
			},
		},
		Button: {
			baseStyle: {
				rounded: "none",
			},
		},
	},
});

export default theme;
