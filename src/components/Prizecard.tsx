import {
	Button,
	Flex,
	Heading,
	Img,
	chakra,
	Text,
	VStack,
	Icon,
} from "@chakra-ui/react";

export default function PrizeCard({
	amount,
	description,
	companyName,
	logo,
	icon,
	url,
}: {
	[key: string]: any;
}) {
	return (
		<Flex
			flexDir='column'
			p='6'
			bg='gray.700'
			rounded='3xl'
			minW='300'
			maxW='300'
		>
			{icon ? (
				<>
					<Flex align='center' p='8' bg='gray.600' rounded='3xl' minH='140'>
						<Icon as={icon} h='100px' w='auto' mx='auto' />
					</Flex>
					<VStack spacing='6' p='8' textAlign='center' flex='1'>
						<Heading size='2xl'>{description}</Heading>
						<Text fontSize={description ? "xl" : "2xl"}>{amount}</Text>
					</VStack>
				</>
			) : (
				<>
					<Flex align='center' p='8' bg='gray.600' rounded='3xl' minH='140'>
						<Img
							objectFit='contain'
							src={logo}
							alt={companyName}
							w='auto'
							h='20'
							mx='auto'
						/>
					</Flex>
					<VStack spacing='3' p='4' textAlign='center' flex='1'>
						<Heading fontSize='xl'>{description}</Heading>
						<Text fontSize={description ? "lg" : "2xl"}>{amount}</Text>
					</VStack>
				</>
			)}

			{url && (
				<chakra.a
					w='full'
					alignSelf='flex-end'
					href={url}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Button
						rounded='xl'
						w='full'
						children='Learn more'
						size='sm'
						bg='gray.600'
						_hover={{ bg: "gray.500" }}
					/>
				</chakra.a>
			)}
		</Flex>
	);
}
