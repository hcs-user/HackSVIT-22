import { Avatar, Box, Heading, HStack, Text, Tooltip } from '@chakra-ui/react'
import TEAM from '../data/team.json';

const Label = (name: String, post: String) => {
    return (
        <Box textAlign='center'>
            <Text fontSize='md'>{name}</Text>
            <Text textTransform='uppercase' fontWeight='bold'>{post}</Text>
        </Box>
    )
}

export default function Team() {
    return (
        <>
            <HStack gap='12' flexWrap='wrap' justifyContent='center'>
                {TEAM.map((team) => (
                    <>
                        {
                            team.member.map((member) => (
                                <Tooltip key={member.name} label={Label(member.name, team.team_name)} hasArrow arrowSize={12} bg='white'>
                                    <Avatar size='2xl' name={member.name} src='https://bit.ly/dan-abramov' />
                                </Tooltip>
                            ))
                        }
                    </>
                ))}
            </HStack>
            {/* <HStack gap='12' flexWrap='wrap' justifyContent='center'>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
            </HStack>
            <HStack gap='12' my='4' pl={[null, '2']} flexWrap='wrap' justifyContent='center'>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
            </HStack>
            <HStack gap='12' flexWrap='wrap' justifyContent='center'>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
            </HStack>
            <HStack gap='12' my='4' pl={[null, '2']} flexWrap='wrap' justifyContent='center'>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={Label("Harsh Sachaniya", "Developer")} hasArrow arrowSize={12} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
            </HStack> */}
        </>
    )
}