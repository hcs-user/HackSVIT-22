import { Avatar, Box, Heading, HStack, Text, Tooltip,Container, Flex } from '@chakra-ui/react'
import TEAM from '../data/team.json';

export default function Team() {
    return (
        <>
            <Container maxW='container.xl' pb='6' my='12'>
				<Flex align='flex-end' gap='4' mb='12'>
					<Heading size='2xl'>Team</Heading>
				</Flex>
				<HStack gap={['8',null,'12']} flexWrap='wrap' justifyContent='center'>
                {TEAM.map((team) => (
                    <>
                        {
                            team.member.map((member) => (
                                <Tooltip key={member.name} label={member.name} hasArrow arrowSize={12} bg='white'>
                                    <Avatar bg='black' size='xl' name={member.name} src={member.img}/>
                                </Tooltip>
                            ))
                        }
                    </>
                ))}
            </HStack>
			</Container>
            
        </>
    )
}