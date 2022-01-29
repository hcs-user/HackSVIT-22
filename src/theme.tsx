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
	purple: {
		50: "#F2E3FF",
		100: "#D4B2FF",
		200: "#B580FF",
		300: "#974DFF",
		400: "#7A1BFE",
		500: "#6002E5",
		600: "#4A02B1",
	},
	blue: {
		50: "#DBF4FF",
		100: "#ADDBFF",
		200: "#7CC2FF",
		300: "#4AA9FF",
		400: "#1A90FF",
		500: "#0077E6",
		600: "#005CB2",
	},
	red: {
		50: "#FFE2F2",
		100: "#FFB1D4",
		200: "#FF7FB5",
		300: "#FF4D97",
		400: "#FE1E7A",
		500: "#E50760",
		600: "#B2054B",
	},
	orange: {
		50: "#FFF3DA",
		100: "#FFDCAE",
		200: "#FFC67D",
		300: "#FFAF4B",
		400: "#FF981A",
		500: "#E67E00",
		600: "#B26200",
	},
	yellow: {
		50: "#FFF3DA",
		100: "#FFE3AD",
		200: "#FFD47D",
		300: "#FFCA4B",
		400: "#FFC21A",
		500: "#E69A00",
		600: "#B27800",
	},
	gray: {
		50: "#F2F2F2",
		100: "#BEC0C0",
		200: "#8A8D8E",
		300: "#575B5C",
		400: "#3D4142",
		500: "#23272A",
	},
};

const theme = extendTheme({
	styles: {
		global: {
			"html, body": {
				backgroundColor: "black",
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
