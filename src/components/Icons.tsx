import { createIcon } from "@chakra-ui/react";

export const FacebookIcon = createIcon({
	displayName: "FacebookIcon",
	viewBox: "0 0 24 24",
	path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>,
});
export const InstagramIcon = createIcon({
	displayName: "InstagramIcon",
	viewBox: "0 0 24 24",
	path: (
		<>
			<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
			<line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
		</>
	),
});
