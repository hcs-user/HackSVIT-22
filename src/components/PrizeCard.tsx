import {
	Box,
	Button,
	Flex,
	Heading,
	Img,
	chakra,
	Text,
	VStack,
} from "@chakra-ui/react";

export default function PrizeCard({
	amount,
	description,
	companyName,
	logo,
	url,
}: {
	[key: string]: string;
}) {
	return (
		<Flex
			flexDir='column'
			p='6'
			bg='gray.700'
			rounded='3xl'
			maxW='300'
			cursor='pointer'
		>
			<Flex align='center' p='8' bg='gray.600' rounded='3xl' minH='120'>
				<Img src={logo} alt={companyName} w='full' maxH='100px' />
			</Flex>
			<VStack spacing='6' p='8' textAlign='center' flex='1'>
				<Heading size='2xl'>{amount}</Heading>
				<Text noOfLines={2}>{description}</Text>
			</VStack>

			<chakra.a
				w='full'
				alignSelf='flex-end'
				href={url}
				target='_blank'
				rel='noopener noreferrer'
			>
				<Button rounded='xl' w='full' children='Learn more' size='sm' />
			</chakra.a>
		</Flex>
	);
}
