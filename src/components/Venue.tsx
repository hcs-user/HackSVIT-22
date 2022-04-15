import { Box, Container, Flex, Heading, Img, chakra, Text } from "@chakra-ui/react";
import { BiLink } from "react-icons/bi";

export default function Venue() {
    return (
        <Container maxW='container.xl' pb='6' my='12'>
            <Flex align='flex-end' gap='4' mb='12'>
                <Heading size='2xl'>Venue</Heading>
                <Box as='svg' viewBox='0 0 661.099 359.579' maxW='lg' mb='2' me='8'>
                    <path
                        data-name='Path 14'
                        d='M1929.157,5045.173c21.265,294.752-134.373,288.267-279.152,184.251s-209.538,142.455-364.223,159.051'
                        transform='translate(-1277.525 -5037.153)'
                        fill='none'
                        stroke='#fe0169'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='15'
                    />
                </Box>
            </Flex>
            <Flex direction='column'>
                <Box pos='absolute' mt='12' p='5' bg='blue.300'>
                    <Heading fontSize={["5", "15", "20"]}>SVIT Road, Rajupura Village, Vasad, Anand, Gujarat</Heading>
                    <chakra.a href='https://goo.gl/maps/hyJCVXNcRgmv1QkY6' target='_blank'>
                        <Flex alignItems='center' gap='1' mt='2' cursor='pointer'>
                            <BiLink />
                            <Text as='span' fontSize={["6", "10", "12"]}>https://goo.gl/maps/hyJCVXNcRgmv1QkY6</Text>
                        </Flex>
                    </chakra.a>
                </Box>
                <Img src="https://www.svitvasad.ac.in/img/landingbanner/1.jpg" rounded='2xl' />
            </Flex>
        </Container>
    );
}
