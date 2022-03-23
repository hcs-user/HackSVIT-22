import { Avatar, HStack, Tooltip } from '@chakra-ui/react'
import React from 'react'

export default function Team() {
    return (
        <>
            <HStack gap='12' flexWrap='wrap'>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                </Tooltip>
                <Tooltip label='Harsh Sachaniya' hasArrow arrowSize={10} bg='white'>
                    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                </Tooltip>
            </HStack>
            <HStack gap='12' my='8' pl={[null, '10']} flexWrap='wrap'>
                <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
                <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/dan-abramov' />
            </HStack>
        </>
    )
}