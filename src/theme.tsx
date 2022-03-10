import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
	heading: "Encode Sans",
	body: "Poppins",
};

const breakpoints = createBreakpoints({
	sm: "40rem",
	md: "52rem",
	lg: "64rem",
	xl: "80rem",
});

const colors = {
	white: "#F0F1F1",
	black: "#0D0F0F",
	// red done
	red: {
		50: "#ffe3ee",
		100: "#ffaacd",
		200: "#fe72ac",
		300: "#fe398a",
		400: "#fe0169",
		500: "#c60152",
		600: "#8d013a",
		700: "#550023",
		800: "#1c000c",
	},
	purple: {
		50: "#EFE3FF",
		100: "#CEAAFF",
		200: "#AD72FE",
		300: "#8C39FE",
		400: "#6B01FE",
		500: "#5301C6",
		600: "#3B018D",
		700: "#240055",
		800: "#0C001C",
	},
	yellow: {
		50: "#FFF7E3",
		100: "#FFE8AA",
		200: "#FFD971",
		300: "#FFCA39",
		400: "#FFBB00",
		500: "#C69100",
		600: "#8E6800",
		700: "#553E00",
		800: "#1C1500",
	},
	gray: {
		50: "#F0F1F1",
		100: "#D2D7D7",
		200: "#B5BCBC",
		300: "#97A1A1",
		400: "#798686",
		500: "#5E6868",
		600: "#434A4A",
		700: "#282D2D",
		800: "#0D0F0F",
	},
	blue: {
		50: "#E3F1FF",
		100: "#AAD6FF",
		200: "#71BAFF",
		300: "#399FFF",
		400: "#0083FF",
		500: "#0066C6",
		600: "#00498E",
		700: "#002C55",
		800: "#000F1C",
	},
};

const theme = extendTheme({
	styles: {
		global: {
			"html, body": {
				height: "100%",
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
				fontWeight: 700,
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
