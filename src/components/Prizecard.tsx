import {
    Box,
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
            <Flex align='center' p='8' bg='gray.600' rounded='3xl' minH='140'>
                {icon ? (
                    <Icon as={icon} h='100px' w='auto' mx='auto' />
                ) : (
                    <Img src={logo} alt={companyName} w='full' maxH='100px' />
                )}
            </Flex>
            <VStack spacing='6' p='8' textAlign='center' flex='1'>
                <Heading size='2xl'>{amount}</Heading>
                <Text noOfLines={2}>{description}</Text>
            </VStack>

            {url && (
                <chakra.a
                    w='full'
                    alignSelf='flex-end'
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Button rounded='xl' w='full' children='Learn more' size='sm' bg='gray.600' _hover={{ bg: 'gray.500' }} />
                </chakra.a>
            )}
        </Flex>
    )
}