import * as React from "react"
import {Helmet} from "react-helmet";
import {Container, Box, Heading, Flex, Button, HStack} from "@chakra-ui/react";
import ParticleBackground from "../ParticleBackground";
import "../../css/scroll.css";
import {StaticImage} from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";
import scrollTo from 'gatsby-plugin-smoothscroll';
import {IoDocumentTextSharp} from "react-icons/io5";

const navigation = [
    {
        label: "Work",
        destination: "#work"
    },
    {
        label: "Experience",
        destination: "#experience"
    },
    {
        label: "Contact",
        destination: "#contact"
    },
];

const Layout = ({ particles, project, children }) => {
    const navigationItems = navigation.map(item => <Button colorScheme='gray' variant='ghost' color="gray.50"
                                                           bg="transparent"
                                                           _hover={{color: "gray.900", bg: "gray.100"}} size='lg'
                                                           onClick={() => handleNavigate(item.destination)}>{item.label}</Button>)

    const handleNavigate = (destination) => {
        if(!project) return scrollTo(destination);

        navigate(`/${destination}`);
    }

    return (
        <Box position="absolute" h="100vh" w="full" overflowY="scroll" py={20}>
            {particles && <ParticleBackground/>}

            <Helmet>
                <title>Menno van Voorst</title>
                <meta name="description" content="Portfolio of Menno van Voorst"/>
            </Helmet>

            <Box position="fixed" top={0} left={0} width="full" height="32px" py={6} zIndex="999">
                <Container maxW='100%' h="full">
                    <Flex justify="space-between">
                        <Link to="/">
                            <Flex align="center">
                                <StaticImage src="../../images/logo.svg" alt="Menno van Voorst" width={32} height={32}/>
                                <Heading fontWeight={600} mb={4} size="md" ml={4} my={0}>Menno van Voorst</Heading>
                            </Flex>
                        </Link>

                        <HStack>
                            {navigationItems}
                        </HStack>
                    </Flex>
                </Container>
            </Box>

            <Container maxW='container.xl' h="full">
                {children}
            </Container>
        </Box>
    )
}

export default Layout;
