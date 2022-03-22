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
	white: "#F8F8F8",
	black: "#0D0F0F",
	// All done
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
	blue: {
		// 50: "#E3F1FF",
		50: "#AAD6FF",
		100: "#71BAFF",
		200: "#399FFF",
		300: "#0083FF",
		400: "#0066C6",
		500: "#00498E",
		600: "#002C55",
		700: "#000F1C",
	},
	orange: {
		// 50: "#FFF2E3",
		50: "#FFD9AA",
		100: "#FFBF71",
		200: "#FFA639",
		300: "#FF8C00",
		400: "#C66D00",
		500: "#8E4E00",
		600: "#552F00",
		700: "#1C1000",
	},
	yellow: {
		// 50: "#FFF7E3",
		50: "#FFE8AA",
		100: "#FFD971",
		200: "#FFCA39",
		300: "#FFBB00",
		400: "#C69100",
		500: "#8E6800",
		600: "#553E00",
		700: "#1C1500",
	},
	// gray: {
	// 	// 50: "#F0F1F1",
	// 	50: "#000000",
	// 	100: "#B5BCBC",
	// 	200: "#97A1A1",
	// 	300: "#798686",
	// 	400: "#5E6868",
	// 	500: "#434A4A",
	// 	600: "#282D2D",
	// 	700: "#0D0F0F",
	// },
	gray: {
		50: "#F0F1F1",
		100: "#D3D5D6",
		200: "#B5BABB",
		300: "#989EA0",
		400: "#7A8285",
		500: "#5F6567",
		600: "#44484A",
		700: "#292B2C",
		800: "#000000",
	},
};

const theme = extendTheme({
	styles: {
		global: {
			"html, body": {
				scrollBehavior: "smooth",
				height: "100%",
				backgroundColor: "black",
				// background: "linear-gradient(to left, #23272a, #001010)",
				lineHeight: "1.6",
				color: "white",
			},
			// "button:focus": {
			// 	boxShadow: "none",
			// 	border: "none",
			// },
			"&::-webkit-scrollbar": {
				width: "1",
				borderRadius: "8px",
				backgroundColor: "transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				borderRadius: "5",
				backgroundColor: "white",
			},
			"&::-webkit-scrollbar-thumb:hover": {
				backgroundColor: "whitesmoke",
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
				padding: "6",
				height: "auto",
				width: "auto",
				rounded: "full",
				_focus: {
					boxShadow: "none",
				},
			},
		},
	},
});

export default theme;
