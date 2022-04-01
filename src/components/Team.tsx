import { Avatar, Box, Heading, HStack, Text, Tooltip } from '@chakra-ui/react'
import TEAM from '../data/team.json';

export default function Team() {
    return (
        <>
            <HStack gap='12' flexWrap='wrap' justifyContent='center'>
                {TEAM.map((team) => (
                    <>
                        {
                            team.member.map((member) => (
                                <Tooltip key={member.name} label={member.name} hasArrow arrowSize={12} bg='white'>
                                    <Avatar size='2xl' name={member.name} src={member.img}/>
                                </Tooltip>
                            ))
                        }
                    </>
                ))}
            </HStack>
        </>
    )
}