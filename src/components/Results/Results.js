import React from "react";
import {Box, Heading, Text} from "@chakra-ui/react";

const Results = ({ heading, text }) => (
    <Box mt={16} pb={32}>
        <Heading fontWeight={600} mb={4} size="xl" sx={{ lineHeight: '135%' }}>{ heading }</Heading>
        <Text fontSize="lg" sx={{ lineHeight: '180%' }}>{text}</Text>
    </Box>
)

export default Results;
