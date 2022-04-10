import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<title>Hack SVIT | 29 April - 1 May '22</title>
				<meta
					name='description'
					content='HackSVIT found its roots in the common aim of providing an agile platform for young hacking enthusiasts. Join us for a 36 hour long action-packed event where like-minded people gather to manifest their ideas into reality in the premises of Sardar Vallabhbhai Institute of Technology, Vasad.'
				/>
				<meta
					property='og:title'
					content="Hack SVIT | Gujarat's largest in-person hackathon"
				/>
				<meta property='og:image' content='website-thumbnail.png' />

				<meta
					property='og:description'
					content='HackSVIT found its roots in the common aim of providing an agile platform for young hacking enthusiasts. Join us for a 36 hour long action-packed event where like-minded people gather to manifest their ideas into reality in the premises of Sardar Vallabhbhai Institute of Technology, Vasad.'
				/>
				<meta
					property='og:site_name'
					content='hackathon.hackclubsvit.co'
					key='ogsitename'
				/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='shortcut icon' href='/bluemono.svg' type='image/x-icon' />
				<link href='' rel='shortcut icon' />
				<Head />
				<body>
					{/* Make Color mode to persists when you refresh the page. */}
					<ColorModeScript initialColorMode='dark' />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
