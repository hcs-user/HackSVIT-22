import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {

    return (
        <>
            <Navbar />
            <Box mt='20'>
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default Layout