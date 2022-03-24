import { Avatar, Heading, HStack, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'

export default function Team() {
    return (
        <>
            <HStack gap='12' flexWrap='wrap' justifyContent='center'>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label={
                    <>
                        <Text>Harsh Sachaniya</Text>
                        <Text textAlign='center'>Developer</Text>    
                    </>
                } hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
            </HStack>
            <HStack gap='12' my='8' pl={[null, '16']} flexWrap='wrap' justifyContent='center'>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='2xl' name='Harsh Sachaniya' src='https://bit.ly/dan-abramov' />
                </Tooltip>
            </HStack>
        </>
    )
}