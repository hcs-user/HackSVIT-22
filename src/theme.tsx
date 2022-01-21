import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
	heading: "Poppins",
	body: "Ubuntu Mono",
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
	purple: {
		100: "#F2E3FF",
		200: "#D4B2FF",
		300: "#B580FF",
		400: "#974DFF",
		500: "#7A1BFE",
		600: "#6002E5",
	},
	blue: {
		100: "#DBF4FF",
		200: "#ADDBFF",
		300: "#7CC2FF",
		400: "#4AA9FF",
		500: "#1A90FF",
		600: "#0077E6",
	},
	red: {
		100: "#FFE2F2",
		200: "#FFB1D4",
		300: "#FF7FB5",
		400: "#FF4D97",
		500: "#FE1E7A",
		600: "#E50760",
	},
	orange: {
		100: "#FFF3DA",
		200: "#FFDCAE",
		300: "#FFC67D",
		400: "#FFAF4B",
		500: "#FF981A",
		600: "#E67E00",
	},
	yellow: {
		100: "#FFF3DA",
		200: "#FFE3AD",
		300: "#FFD47D",
		400: "#FFCA4B",
		500: "#FFC21A",
		600: "#E69A00",
	},
	gray: {
		100: "#F2F2F2",
		200: "#BEC0C0",
		300: "#8A8D8E",
		400: "#575B5C",
		500: "#3D4142",
		600: "#23272A",
	},
};

const theme = extendTheme({
	styles: {
		global: {
			"html, body": {
				backgroundColor: "gray.600",
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
});

export default theme;
