import {
	Avatar,
	Box,
	Heading,
	HStack,
	Text,
	Tooltip,
	Container,
	Flex,
	Link,
	chakra
} from "@chakra-ui/react";
import TEAM from "../data/team.json";

export default function Team() {
	return (
		<Container maxW='container.xl' pb='6' my='12'>
			<Flex align='flex-end' gap='4' mb='12'>
				<Heading size='2xl'>Team</Heading>
			</Flex>
			<HStack gap={["8", null, "12"]} flexWrap='wrap' justifyContent='center'>
				{TEAM.map((member) => (
					<>
						<Tooltip
							key={member.name}
							label={member.name}
							hasArrow
							arrowSize={12}
							// bg='gray.300'
							rounded='base'
							bg='white'
							color='black'
						>
							<chakra.a href={`https://linkedin.com/in/${member.link}`} target="_blank">
								<Avatar
									bg='transparent'
									size='xl'
									name={member.name}
									src={member.img}
								/>
							</chakra.a>
						</Tooltip>
					</>
				))}
			</HStack>
		</Container>
	);
}
