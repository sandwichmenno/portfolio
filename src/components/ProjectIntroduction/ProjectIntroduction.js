import React from "react";
import {Badge, Box, Flex, Heading, Text} from "@chakra-ui/react";

const ProjectIntroduction = ({technologies, heading, text}) => {
    const badges = technologies.map(technology => <Badge mr={4} mb={2} transition="all 0.5s" fontSize='1em' colorScheme='gray' cursor="default" variant="outline" _hover={{ bg: "gray.700", transform: "translateY(-4px)" }}>{technology}</Badge>);

    return (
        <Box mt={8}>
            <Heading fontWeight={600} mb={4} size="2xl" sx={{ lineHeight: '135%' }}>{heading}</Heading>
            <Flex wrap="wrap" w="full" mb={4}>
                {badges}
            </Flex>

            <Text fontSize="lg" sx={{ lineHeight: '180%' }}>{text}</Text>
        </Box>
    )
}

export default ProjectIntroduction;
