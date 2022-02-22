import * as React from "react";
import {Box, Heading, Text, Badge, UnorderedList, ListItem, Flex} from "@chakra-ui/react";
import { IoLogoLinkedin, IoDocumentTextSharp, IoLocationSharp, IoMailSharp, IoCallSharp } from "react-icons/io5";
import Layout from "../../components/Layout";
import Slideshow from "../../components/Slideshow";
import slide1 from "../../images/work/peerpep/home.png";
import slide2 from "../../images/work/peerpep/effort.png";
import slide3 from "../../images/work/peerpep/creation.png";
import slide4 from "../../images/work/peerpep/phone1.png";
import slide5 from "../../images/work/peerpep/phone2.png";
import ProjectIntroduction from "../../components/ProjectIntroduction";
import Tasklist from "../../components/Tasklist";
import Results from "../../components/Results";
import content from "../../content.json";

const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5
]

const PeerpepPage = () => {
    const { introduction, tasks, results } = content.projects.peerpep;

    return (
        <Layout particles={false} project={true}>
            <ProjectIntroduction technologies={introduction.technologies} heading={introduction.heading} text={introduction.text} />

            <Box mt={16} w="full">
                <Slideshow images={images} />
            </Box>

            <Tasklist tasks={tasks} />

            <Results heading={results.heading} text={results.text} />
        </Layout>
    )
}

export default PeerpepPage;
