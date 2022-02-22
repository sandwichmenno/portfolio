import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ParagraphRow = ({heading, paragraph}) => (
    <Box>
        <Heading size="md">{heading}</Heading>
        <Text>{paragraph}</Text>
    </Box>
)

export default ParagraphRow;
