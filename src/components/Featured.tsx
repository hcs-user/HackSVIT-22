import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container, Heading } from '@chakra-ui/react';
import { FcAssistant, FcBiotech, FcCandleSticks, FcDonate, FcGenealogy, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
    title: string;
    // text: string;
    icon: ReactElement;
}

const Feature = ({ title, icon }: FeatureProps) => {
    return (
        <Stack align="center" py="8" borderWidth="thin" rounded='md'>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            {/* <Text color={'gray.600'}>{text}</Text> */}
        </Stack >
    );
};

export default function Featured() {
    return (
        <Container maxW="3xl">
            <Heading textAlign="center">Tracks</Heading>
            <Box p={6}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Feature
                        icon={<Icon as={FcBiotech} w={10} h={10} />}
                        title={'Artificial Intelligence'}
                    />
                    <Feature
                        icon={<Icon as={FcCandleSticks} w={10} h={10} />}
                        title={'Blockchain'}
                    />
                    <Feature
                        icon={<Icon as={FcGenealogy} w={10} h={10} />}
                        title={'Open Domain'}
                    />
                </SimpleGrid>
            </Box>
        </Container>
    );
}