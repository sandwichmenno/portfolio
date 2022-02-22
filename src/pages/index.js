import * as React from "react";
import { Button, Grid, GridItem, HStack, Flex, Box, Heading, Text, Badge, Icon, VStack } from "@chakra-ui/react";
import { IoLogoLinkedin, IoDocumentTextSharp, IoLocationSharp, IoMailSharp, IoCallSharp } from "react-icons/io5";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Card from "../components/Card";
import slntThumb from "../images/work/slnt/thumb.png";
import peerpepThumb from "../images/work/peerpep/thumb.png";
import godoThumb from "../images/work/godo/thumb.png";
import kpnThumb from "../images/work/kpn/thumb.png";

const projects = [
    {
        title: "SLNT.stream",
        image : slntThumb,
        color: "#F35714",
        destination: "/projects/slnt"
    },
    {
        title: "KPN Servicetools",
        image : kpnThumb,
        color: "#00CC00",
        destination: "/projects/kpn"
    },
    {
        title: "Peerpep",
        image : peerpepThumb,
        color: "#FF00BE",
        destination: "/projects/peerpep"
    },
    {
        title: "GoDo",
        image : godoThumb,
        color: "#333333",
        destination: "/projects/godo"
    },
];
const skills = ["Javascript", "ReactJs", "AngularJS", "Typescript", "jQuery", "Sass", "Cypress", "JEST", "NodeJS", "Webpack", "PHP", "Wordpress", "Drupal", "UX Design", "Figma", "Sketch", "Usability Testing", "A/B-testing", "Wireframing", "Prototyping"];
const contact = [
    {
        label: "email",
        text: "mennovanvoorstmail@gmail.com",
        icon: IoMailSharp
    },
    {
        label: "phone",
        text: "+31 6 34848871",
        icon: IoCallSharp
    },
    {
        label: "location",
        text: "Hilversum, The Netherlands",
        icon: IoLocationSharp
    },
]

const IndexPage = () => {
    const projectsCards = projects.map(project => <GridItem><Card {...project} /></GridItem>);
    const skillsBadges = skills.map(skill => <GridItem><Badge transition="all 0.5s" fontSize='1em' colorScheme='gray' cursor="default" variant="outline" _hover={{ bg: "gray.700", transform: "translateY(-4px)" }}>{skill}</Badge></GridItem>);
    const contactDetails = contact.map(detail => <Text><Icon as={detail.icon} mr={2} /> {detail.text}</Text>);

  return (
    <Layout particles={true}>
        <Box h="128px" w="128px" bgGradient='linear(to-b, gray.100, gray.100, blue.400)' borderRadius="full" overflow="hidden"><StaticImage src="../images/menno.jpg" alt="Menno van Voorst" /></Box>

        <Box mt={8}>
            <Heading fontWeight={600} mb={4} size="2xl" sx={{ lineHeight: '135%' }}>Hi there! I am Menno van Voorst, a User-Centered Front-end Developer living in Hilversum</Heading>
            <Text fontSize="lg" sx={{ lineHeight: '180%' }}>Ever since I was young I always had a passion for design and development. Combine this passion with my knowledge of user experience design and you get a passionate front-end developer who always wants to bring out the best in himself in order to give other users the perfect browsing experience. Next part in this journey is mastering the skill of web accessibility.</Text>
        </Box>

        <HStack spacing={8} mt={8}>
            <Button colorScheme='gray' leftIcon={<IoLogoLinkedin />} variant='solid' size='lg'>LinkedIn</Button>
            <Button colorScheme='gray' leftIcon={<IoDocumentTextSharp />} variant='solid' size='lg'>Resume</Button>
        </HStack>

        <Box pt={32} id="work">
            <Heading fontWeight={600} mb={8} size="2xl" sx={{ lineHeight: '135%' }}>My work</Heading>

            <Grid templateColumns='repeat(2, 1fr)' gap={16}>
                {projectsCards}
            </Grid>
        </Box>

        <Box pt={32} id="experience">
            <Heading fontWeight={600} mb={8} size="2xl" sx={{ lineHeight: '135%' }}>My experience</Heading>

            <Grid autoColumns='1fr' autoFlow="column" gap={16}>
                <GridItem>
                    <Text sx={{ lineHeight: '175%' }}>Driven by curiosity, I started my digital journey 12 years ago by creating simple websites with HTML. My hobby became my job when I started taking on small projects as a freelancer, until I started working on Peerpep as a front-end developer, (ux)-designer and product owner that required me to manage and work with a larger team. While I'm doing all this, I started working at Ordina as a front-end developer last year. Currently I'm outsourced to KPN creating servicetools for their customers, but I have also worked for clients like KWF Kankerfonds, BlueSkyGroup and UMC Groningen.</Text>
                </GridItem>

                <GridItem>
                    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
                        {skillsBadges}
                    </Grid>
                </GridItem>
            </Grid>
        </Box>

        <Box py={32} id="contact">
            <Heading fontWeight={600} mb={8} size="2xl" sx={{ lineHeight: '135%' }}>My contact details</Heading>

            <Grid autoColumns='1fr' autoFlow="column" gap={16}>
                <GridItem>
                    <Text sx={{ lineHeight: '175%' }}>Do you have a project that would be awesome for me? Or do you just want to say hello and talk about the weather? Then get in touch via email, phone or even via a letter!</Text>
                </GridItem>

                <GridItem>
                    <VStack align="flex-start" spacing={2}>
                        { contactDetails }
                    </VStack>
                </GridItem>
            </Grid>
        </Box>
    </Layout>
  )
}

export default IndexPage
